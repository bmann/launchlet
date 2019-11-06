const { throws, deepEqual } = require('assert');

const mainModule = require('./main.js');

describe('LCHVitrinePageLinksHighlightRemoveRecipe', function testLCHVitrinePageLinksHighlightRemoveRecipe() {

	it('returns LCHRecipe', async function() {
		deepEqual(mainModule.LCHVitrinePageLinksHighlightRemoveRecipe(), {
			LCHRecipeCallback: mainModule.LCHVitrinePageLinksHighlightRemoveCallback,
			LCHRecipeSignature: 'LCHVitrinePageLinksHighlightRemove',
			LCHRecipeIsExcluded: mainModule.LCHVitrinePageLinksHighlightRemoveIsHidden,
		});
	});

});
