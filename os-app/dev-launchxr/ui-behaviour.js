const params = Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).map(function (e) {
	if (['TestLaunchxrInput'].includes(e[0])) {
		e[1] = JSON.parse(e[1]);
	}
	
	(e[1].LCHOptionRecipes || []).forEach(function (e) {
		return Object.assign(e, {
			LCHRecipeCallback: eval(e.LCHRecipeCallback),
			LCHRecipeIsExcluded: eval(e.LCHRecipeIsExcluded),
		});
	});

	return e;
}));

const mod = {

	// INTERFACE

	InterfaceButtonDidClick() {
		setTimeout(function () {
			mod.ControlLaunch();
		});
	},

	// CONTROL

	ControlLaunch() {
		let app = new Main({
			target: document.getElementById('LCHLaunchxrTarget'),
			props: {
				LRTOptions: Object.assign({
					LCHOptionMode: 'kLCHLaunchxrModeCommand',
					LCHOptionLanguage: window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage'),
				// 	LCHOptionIncludePageRecipes: !!params.LCHOptionIncludePageRecipes || false,
				// 	LCHOptionRunAutomaticRecipes: !!params.LCHOptionRunAutomaticRecipes || false,
				// },
				// LRTDidFinish () {
				// 	let span = document.createElement('span');
				// 	span.classList.add('TestLaunchxrDidFinish');
				// 	document.body.appendChild(span);

				// 	app.$destroy();
				// 	app = null;
				}, params.TestLaunchxrInput),
			},
		});
	},

	// SETUP

	SetupEverything() {
		if (params.LCHTestSkipAutomaticLaunch) {
			return;
		}
		
		mod.ControlLaunch();
	},

	// LIFECYCLE

	LifecyclePageWillLoad () {
		mod.SetupEverything();
	},

};

window.LCHLaunchxrBehaviour = mod
