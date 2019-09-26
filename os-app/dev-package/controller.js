const pathPackage = require('path');

exports.OLSKControllerRoutes = function() {
	return {
		LCHPackageRoute: {
			OLSKRoutePath: '/package',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction: function(req, res, next) {
				return res.render(require('path').join(__dirname, 'ui-view'), {});
			},
			OLSKRouteLanguages: ['en'],
			OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
		},
	};
};

//_ OLSKControllerSharedStaticAssetFolders

exports.OLSKControllerSharedStaticAssetFolders = function() {
	return [
		'__compiled',
	];
};

