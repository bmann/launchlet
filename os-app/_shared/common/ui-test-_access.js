describe('LCHCommon_Access', function test_LCHCommon_Access () {

	it('redirects LCHCommonIdentityRedirect', async function() {
		browser.assert.deepEqual((await (await browser.fetch('http://loc.tests' + OLSKTestingCanonical(require('./controller.js').OLSKControllerRoutes().LCHCommonIdentityRedirect))).text()).slice(0, 10), '<?xml vers');
	});

	it('redirects LCHCommonLogoRedirect', async function() {
		browser.assert.deepEqual((await (await browser.fetch('http://loc.tests' + OLSKTestingCanonical(require('./controller.js').OLSKControllerRoutes().LCHCommonLogoRedirect))).text()).slice(0, 10), '<?xml vers');
	});

});
