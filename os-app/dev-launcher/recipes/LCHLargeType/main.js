export const LCHLargeTypeCallback = function(inputData) {
	if (typeof inputData !== 'string') {
		throw new Error('LCHErrorInputInvalid');
	}

	console.log(inputData.trim());
};

export const LCHLargeTypeRecipe = function() {
	return {
		LCHRecipeTitle: 'Large Type',
		LCHRecipeSignature: 'LCHLargeType',
		LCHRecipeInputTypes: 'String',
		LCHRecipeCallback: LCHLargeTypeCallback,
	};
};