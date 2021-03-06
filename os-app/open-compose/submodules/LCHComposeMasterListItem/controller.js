exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/LCHComposeMasterListItem',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'LCHComposeMasterListItemStubRoute',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteLanguageCodes: ['en', 'fr', 'es'],
	}];
};
