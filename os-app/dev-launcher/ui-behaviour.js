(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.LCHLauncherBehaviour = global.LCHLauncherBehaviour || {})));
}(this, (function (exports) { 'use strict'; Object.defineProperty(exports, '__esModule', { value: true }); let moi = {}; Object.assign(exports, moi = {

	//# SETUP

	setupEverything() {
		moi.setupFormulas();
		moi.setupLauncher();
	},
	setupFormulas() {
		window.LCHPageFormulas = function () {
			return [
				{
					LCHRecipeTitle: 'Hello',
					LCHRecipeCallback: function () {
						document.querySelector('pre').innerText = 'Hello';
					},
				},
			];
		};
	},
	setupLauncher() {
		let app = new Main({
			target: document.getElementById('LCHLauncherTarget'),
			props: {
				dataObjects: [
					'Alfa',
					'Bravo',
					'Charlie',
					'Delta',
					'Echo',
					'Foxtrot',
					'Golf',
					'Hotel',
					'Indigo',
					'Juliet',
					'Kilo',
					'Llama',
				].map(function (e) {
					return {
						LCHRecipeTitle: e,
						LCHRecipeCallback: function () {
							document.querySelector('pre').innerText = e;
						},
					};
				}),
				completionHandler () {
					return (app.$destroy() || true) && (app = null);
				},
				optionsObject: Object.assign({}, {
					runMode: (new URLSearchParams(window.location.search)).get('runMode') || undefined,
				}),
			},
		});
	},

	//# LIFECYCLE

	lifecyclePageWillLoad () {
		moi.setupEverything();
	},
}); })));