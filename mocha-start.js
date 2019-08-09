(function OLSKMochaBrowser() {
	if (process.env.OLSK_TESTING_BEHAVIOUR !== 'true') {
		return;
	}

	const Browser = require('zombie');

	Browser.localhost('loc.tests', 3000);
	
	Browser.prototype.OLSKFireKeyboardEvent = function(target, keyCode, eventName = 'keydown') {
		const event = this.window.document.createEvent('HTMLEvents');
		event.initEvent(eventName, true, true);
		event.which = event.keyCode = event.key = event.code = keyCode;

		target = typeof target === 'string' ? this.query(target) : target;

		if (!target) {
			throw new Error('no target');
		}

		target.dispatchEvent(event);

		return this._wait(null);
	};

	Browser.extend(function(browser) {
	  browser.on('confirm', function(dialog) {
	    return browser.OLSKConfirmCallback ? browser.OLSKConfirmCallback(dialog) : dialog;
	  });
	});
	
	Browser.prototype.OLSKConfirm = async function(param1, param2) {
		let browser = this;
		return await new Promise(async function (resolve, reject) {
			browser.OLSKConfirmCallback = function (dialog) {
				delete browser.OLSKConfirmCallback;
				return resolve(param2 ? param2(dialog) : dialog);
			};

			param1();
		});
	};

	global.OLSKBrowser = Browser;
})();

let languageDictionary = {};
(function OLSKMochaLocalizedStrings() {
	if (process.env.OLSK_TESTING_BEHAVIOUR !== 'true') {
		return;
	}

	const pathPackage = require('path');
	const OLSKInternational = require('OLSKInternational');

	let baseDirectory = pathPackage.join(__dirname, 'os-app');
	languageDictionary = require('glob').sync('*i18n*.y*(a)ml', {
	  matchBase: true,
	  cwd: baseDirectory,
	}).filter(function(e) {
	  return OLSKInternational.OLSKInternationalInputDataIsTranslationFileBasename(pathPackage.basename(e));
	}).map(function (e) {
		return pathPackage.join(baseDirectory, e);
	}).reduce(function(coll, item) {
		let languageID = OLSKInternational.OLSKInternationalLanguageIDForTranslationFileBasename(pathPackage.basename(item));

		return (coll[languageID] = Object.assign(coll[languageID] || {}, require('js-yaml').safeLoad(require('fs').readFileSync(item, 'utf8')))) && coll;
	}, {});

	global.OLSKTestingLocalized = function(translationConstant, languageCode) {
		return OLSKInternational.OLSKInternationalLocalizedStringWithTranslationKeyAndTranslationDictionary(translationConstant, languageDictionary[languageCode]);
	};
})();

(function LCHMochaStorage() {
	let moduleSlugs = [
		'lch_members',
	];

	const uSerial = function (inputData) {
		return inputData.reduce(async function (coll, e) {
			return e.then(Array.prototype.concat.bind(await coll));
		}, Promise.resolve([]));
	};

	before(function(done) {
		global.LCHTestingStorageClient = require('./os-app/_shared/LCHStorageClient/main.js').LCHStorageClientForModules(moduleSlugs.map(function (e) {
			return require(`./os-app/_shared/rs-modules/${ e }/rs-module.js`).RSModuleProtocolModuleForChangeDelegate(null);
		}));

		done();
	});

	beforeEach(async function() {
		await uSerial(moduleSlugs.map(async function (e) {
			return await Promise.all(Object.keys(await global.LCHTestingStorageClient[e].listObjects()).map(global.LCHTestingStorageClient[e].deleteObject));
		}));
	});
})();

(function OLSKMochaErrors() {
	process.on('unhandledRejection', () => {
		// console.log('Unhandledd Rejection at:', arguments)
		// Recommended: send the information to sentry.io
		// or whatever crash reporting service you use
	});
})();

(function OLSKMochaPreprocess() {
	const fs = require('fs');
	const oldRequire = require('olsk-rollup-i18n')()._OLSKRollupI18NReplaceInternationalizationToken;
	const replaceFunctions = [
		require('OLSKTesting')._OLSKTestingMochaReplaceES6Import,
		function (inputData) {
			return (oldRequire({
				code: inputData,
			}, languageDictionary) || {
				code: inputData,
			}).code;
		},
	];

	require.extensions['.js'] = function(module, filename) {
		try {
			return module._compile(replaceFunctions.reduce(function (coll, item) {
				return item(coll);
			}, fs.readFileSync(filename, 'utf-8')), filename);
		} catch (err) {
			// console.log(code); // eslint-disable-line no-console
			throw err;
		}
	};
})();
