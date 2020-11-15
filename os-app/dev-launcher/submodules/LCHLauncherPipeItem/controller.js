exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/LCHLauncherPipeItem',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'LCHLauncherPipeItemStubRoute',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
