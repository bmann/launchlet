export default {
	OLSKRollupConfigCustomFor (inputData) {
		(function StripTerser() {
			inputData.plugins = inputData.plugins.filter(function (e) {
				return e.name !== 'terser';
			});
		})();

		return inputData;
	},	
};
