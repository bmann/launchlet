const kDefaultRoute = require('../../../controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
};
	
describe(`LCHDOMElementFocus_Localize-${ OLSKRoutingLanguage }`, function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage,
			LCHOptionMode: 'LCHModePipe',
		});
	});

	before(function() {
		browser.OLSKFireKeyboardEvent(browser.window, 'LCHActiveDocumentFocusElements');
		return browser.OLSKFireKeyboardEvent(browser.window, 'Enter');
	});

	it('localizes LCHLauncherPipeItemTitle', function() {
		browser.assert.text(`${ LCHLauncherActionPromptItemSelected } ${ LCHLauncherPipeItemTitle }`, uLocalized('LCHStandardRecipeNames').LCHDOMElementFocus);
	});

});

});
