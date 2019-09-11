import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('LCHComposeBuildPairExtensionUIForm', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	context('SubmitInvalid', function testSubmitInvalid () {
	
		it('alerts', function() {
			deepEqual(typeof browser.OLSKAlert(function () {
				browser.pressButton(LCHBuildPairExtensionSubmitButton)
			}), 'string');
		});
		
		it('sends no BuildPairExtensionDispatchUpdate', function() {
			browser.assert.text('#LCHComposeBuildPairExtensionDispatchUpdate', '0');
			browser.assert.text('#LCHComposeBuildPairExtensionDispatchUpdateText', '');
		});
	
	});

	context('SubmitValid', function testSubmitValid () {
		
		before(function () {
			browser.fill(LCHBuildPairExtensionPublicKeyField, ' alfa ') // #spec trim
			browser.click(LCHBuildPairExtensionSubmitButton)
		});
		
		it('hides LCHBuildPairExtensionPublicKeyField', function() {
			browser.assert.elements(LCHBuildPairExtensionPublicKeyField, 0);
		});
		
		it('hides LCHBuildPairExtensionSubmitButton', function() {
			browser.assert.elements(LCHBuildPairExtensionSubmitButton, 0);
		});
		
		it('sends BuildPairExtensionDispatchUpdate', function() {
			browser.assert.text('#LCHComposeBuildPairExtensionDispatchUpdate', '1');
			browser.assert.text('#LCHComposeBuildPairExtensionDispatchUpdateText', 'alfa');
		});
	
	});

});
