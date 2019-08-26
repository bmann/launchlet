export const RSModuleSharedJSONSchemaForErrors = function(inputData) {
	if (typeof inputData !== 'object' || inputData === null) {
		throw new Error('LCHErrorInputInvalid');
	}

	return {
		type: 'object',
		properties: Object.entries(inputData).reduce(function (coll, [key, val]) {
			coll[key] = {};

			coll[key].type = [...val].shift().replace('LCHErrorNot', '').toLowerCase().replace('filled', 'string');

			if (coll[key].type === 'date') {
				coll[key].type = 'string';
				coll[key].format = 'date-time';
			}

			return coll;
		}, {}),
		required: Object.entries(inputData).filter(function ([key, val]) {
			return !val.includes('__RSOptional');
		}).map(function ([key, val]) {
			return key;
		}),
	};
};

export const LCHStorageModule = function (inputData) {
	return {
		name: 'launchlet',
		builder: function(privateClient, publicClient) {
			return {
				exports: inputData.reduce(function (coll, item) {
					let storage = item.LCHCollectionStorageGenerator(privateClient, publicClient, item.LCHCollectionChangeDelegate);

					privateClient.declareType(storage.LCHStorageType, RSModuleSharedJSONSchemaForErrors(storage.LCHStorageModelErrors));

					coll[storage.LCHStorageCollection] = storage.LCHStorageExports;

					return coll;
				}, {}),
			};
		},
	};
};
