import { deepEqual } from 'assert';

const kDefaultRoute = require('../../controller.js').OLSKControllerRoutes().LCHComposeRoute;

describe.skip('LCHComposeFooterMisc', function () {

describe('LCHComposeFooterGuideLink', function testLCHComposeFooterGuideLink () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	it('links to LCHGuideRoute', function () {
		browser.assert.attribute(LCHComposeFooterGuideLink, 'href', require('../../../open-guide/controller.js').OLSKControllerRoutes().LCHGuideRoute)
	});

	it('opens in new window', function () {
		browser.assert.attribute(LCHComposeFooterGuideLink, 'target', '_blank')
	});

});

describe('LCHComposeFooterStorageButton', function testLCHComposeFooterStorageButton () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	before(function () {
		browser.assert.text('#TestLCHComposeFootetDispatchStorage', '0')

		browser.click(LCHComposeFooterStorageButton)
	});
	
	it('has class', function () {
		browser.assert.hasClass(LCHComposeFooterStorageButton, 'OLSKLayoutButtonNoStyle')
		browser.assert.hasClass(LCHComposeFooterStorageButton, 'OLSKLayoutElementTappable')
	});
	
	it('sends LCHComposeFootetDispatchStorage', function () {
		browser.assert.text('#TestLCHComposeFootetDispatchStorage', '1')
	});

});

describe('LCHComposeFooterStorageStatus', function testLCHComposeFooterStorageStatus () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?LCHComposeFooterStorageStatus=alfa`);
	});

	it('shows LCHComposeFooterStorageStatus', function () {
		browser.assert.text(OSWRootRemoteStorageError, 'alfa')
	});

});

});
