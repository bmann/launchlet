import { throws, deepEqual } from 'assert';

import * as mainModule from './recipes.js';

describe('LCHLauncherStandardRecipes', function testLCHLauncherStandardRecipes() {

	it('returns LCHFormulaObject for each folder', function() {
		deepEqual(mainModule.LCHLauncherStandardRecipes().sort(function (a, b) {
			if ( a.LCHRecipeSignature < b.LCHRecipeSignature) {
				return -1;
			}
			if ( a.LCHRecipeSignature > b.LCHRecipeSignature) {
				return 1;
			}
			
			return 0;
		}), [].concat.apply([], require('glob').sync('*main.js', {
		  matchBase: true,
		  cwd: __dirname,
		}).map(function (e) {
			return Object.entries(require(`./${ e }`)).filter(function (e) {
				return e.shift().includes('Recipe');
			}).map(function (e) {
				return e.pop()();
			});
		})));
	});

});
