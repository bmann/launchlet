exports.OLSKControllerUseLivereload = function() {
	return process.env.NODE_ENV === 'development';
};

exports.OLSKControllerSharedMiddlewares = function() {
	return {
		LCHVitrineRouteGuardMiddleware (req, res, next) {
			return next(require('./logic.js').LCHVitrineRouteGuard(process.env))
		},
	};
};

exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'LCHVitrineRoute',
		OLSKRouteFunction: function (req, res, next) {
			return res.render(require('path').join(__dirname, 'ui-view'), {
				LCHVitrineContent: require('OLSKString').OLSKStringReplaceTokens(require('marked')(require('fs').readFileSync(require('path').join(__dirname, `text.${ res.locals.OLSKSharedPageCurrentLanguage }.md`), 'utf-8')), Object.assign({
					LCHVitrineTokenComposeURL: res.locals.OLSKCanonicalLocalizedFor('LCHComposeRoute'),
					LCHVitrineTokenGuideURL: res.locals.OLSKCanonicalFor('LCHGuideRoute'),
					LCH_VITRINE_QUICKSILVER_URL: process.env.LCH_VITRINE_QUICKSILVER_URL,
					LCH_SHARED_DONATE_URL: process.env.LCH_SHARED_DONATE_URL,
				}, res.locals.OLSKLocalized('LCHVitrineDemoRecipeNames'), res.locals.OLSKLocalized('LCHStandardRecipeNames'))),
				OLSKStringReplaceTokens: require('OLSKString').OLSKStringReplaceTokens,
			});
		},
		OLSKRouteLanguages: ['en', 'fr', 'es'],
		OLSKRouteMiddlewares: [
			'LCHVitrineRouteGuardMiddleware',
			'LCHSharedDonateLinkGuardMiddleware',
		],
	}];
};