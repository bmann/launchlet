const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('LCHComposeBuild_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			LCHComposeBuildRunLink: 'alfa',
		});
	});

	describe('LCHComposeBuildRunLink', function test_LCHComposeBuildRunLink () {

		it('sets href', function () {
			browser.assert.attribute(LCHComposeBuildRunLink, 'href', 'alfa');
		});

		it('sets accesskey', function () {
			browser.assert.attribute(LCHComposeBuildRunLink, 'accesskey', 'r');
		});

		context('click', function () {

			before(function () {
				browser.assert.text('#TestLCHComposeBuildDispatchRun', '0');
			});

			before(function () {
				return browser.click(LCHComposeBuildRunLink);
			});
	
			it('sends LCHComposeBuildDispatchRun', function () {
				browser.assert.text('#TestLCHComposeBuildDispatchRun', '1');
			});
	
		});

	});

	describe('LCHComposeBuildPipeModeEnabledField', function test_LCHComposeBuildPipeModeEnabledField() {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				LCHComposeBuildRunLink: 'alfa',
			});
		});

		it('sets type', function () {
			browser.assert.attribute(LCHComposeBuildPipeModeEnabledField, 'type', 'checkbox');
		});

		context('false', function () {
			
			it('binds LCHComposeBuildPipeModeEnabled', function () {
				browser.assert.OLSKIsChecked(LCHComposeBuildPipeModeEnabledField, false);
			});
			
		});

		context('true', function () {
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					LCHComposeBuildRunLink: 'alfa',
					LCHComposeBuildPipeModeEnabled: true,
				});
			});

			it('binds LCHComposeBuildPipeModeEnabled', function () {
				browser.assert.OLSKIsChecked(LCHComposeBuildPipeModeEnabledField, true);
			});
		
		});

		context('input', function () {

			before(function () {
				browser.assert.text('#TestLCHComposeBuildDispatchPipeModeEnabled', '0');
				browser.assert.text('#TestLCHComposeBuildDispatchPipeModeEnabledData', 'undefined');
			});

			before(function () {
				return browser.uncheck(LCHComposeBuildPipeModeEnabledField);
			});

			it('sends LCHComposeBuildDispatchPipeModeEnabled', function () {
				browser.assert.text('#TestLCHComposeBuildDispatchPipeModeEnabled', '1');
				browser.assert.text('#TestLCHComposeBuildDispatchPipeModeEnabledData', 'false');
			});
		
		});

	});

	describe('LCHComposeBuildPageRecipesEnabledField', function test_LCHComposeBuildPageRecipesEnabledField() {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				LCHComposeBuildRunLink: 'alfa',
			});
		});

		it('sets type', function () {
			browser.assert.attribute(LCHComposeBuildPageRecipesEnabledField, 'type', 'checkbox');
		});

		context('false', function () {
			
			it('binds LCHComposeBuildPageRecipesEnabled', function () {
				browser.assert.OLSKIsChecked(LCHComposeBuildPageRecipesEnabledField, false);
			});
			
		});

		context('true', function () {
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					LCHComposeBuildRunLink: 'alfa',
					LCHComposeBuildPageRecipesEnabled: true,
				});
			});

			it('binds LCHComposeBuildPageRecipesEnabled', function () {
				browser.assert.OLSKIsChecked(LCHComposeBuildPageRecipesEnabledField, true);
			});
		
		});

		context('input', function () {

			before(function () {
				browser.assert.text('#TestLCHComposeBuildDispatchPageRecipesEnabled', '0');
				browser.assert.text('#TestLCHComposeBuildDispatchPageRecipesEnabledData', 'undefined');
			});

			before(function () {
				return browser.uncheck(LCHComposeBuildPageRecipesEnabledField);
			});

			it('sends LCHComposeBuildDispatchPageRecipesEnabled', function () {
				browser.assert.text('#TestLCHComposeBuildDispatchPageRecipesEnabled', '1');
				browser.assert.text('#TestLCHComposeBuildDispatchPageRecipesEnabledData', 'false');
			});
		
		});

	});

});
