import { deepEqual } from 'assert';

const kDefaultRoute = require('../../../controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};
	
describe.only(`LCHSearch_Localize-${ languageCode }`, function () {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			OLSKRoutingLanguage: languageCode,
			runMode: 'kRunModePipe',
		}));
	});

	context('LCHSearchWith', function () {

		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'w');
		});

		it('localizes LCHLauncherPipeItemTitle', function() {
			browser.assert.text(`${ LCHLauncherActionPromptItemSelected } ${ LCHLauncherPipeItemTitle }`, uLocalized('LCHStandardRecipeNames').LCHSearchFor);
		});
	
	});

	context('LCHSearchWith', function () {

		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, '.');
		});

		before(function () {
			browser.fill(LCHLauncherPromptDotModeInput, 'alfa');

			browser.OLSKFireKeyboardEvent(browser.window, 'Tab');

			return browser.OLSKFireKeyboardEvent(browser.window, 'w');
		});

		it('localizes LCHLauncherPipeItemTitle', function() {
			browser.assert.text(`${ LCHLauncherActionPromptItemSelected } ${ LCHLauncherPipeItemTitle }`, uLocalized('LCHStandardRecipeNames').LCHSearchWith);
		});
	
	});
	
});

});