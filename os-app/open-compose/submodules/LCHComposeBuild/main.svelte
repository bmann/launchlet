<script>
export let LCHComposeBuildRunLink;
export let LCHComposeBuildPipeModeEnabled;
export let LCHComposeBuildPageRecipesEnabled;
export let LCHComposeBuildDispatchRun;
export let LCHComposeBuildDispatchPipeModeEnabled;
export let LCHComposeBuildDispatchPageRecipesEnabled;

import { OLSKLocalized } from 'OLSKInternational';

const mod = {

	// INTERFACE

	InterfaceRunButtonDidClick (event) {
		event.preventDefault();

		LCHComposeBuildDispatchRun();
	},

};
</script>

<div class="LCHComposeBuild">

<a class="LCHComposeBuildRunLink" href={ LCHComposeBuildRunLink } accesskey="r" on:click={ mod.InterfaceRunButtonDidClick }>{ OLSKLocalized('LCHComposeBuildRunLinkText') }</a>

<label>
	<input class="LCHComposeBuildPipeModeEnabledField" type="checkbox" bind:checked={ LCHComposeBuildPipeModeEnabled } on:input={ function () {LCHComposeBuildDispatchPipeModeEnabled(this.checked) } } />
	<span class="LCHComposeBuildPipeModeEnabledFieldLabel">{ OLSKLocalized('LCHComposeBuildPipeModeEnabledFieldLabelText') }</span>
</label>

<label>
	<input class="LCHComposeBuildPageRecipesEnabledField" type="checkbox" bind:checked={ LCHComposeBuildPageRecipesEnabled } on:input={ function () {LCHComposeBuildDispatchPageRecipesEnabled(this.checked) } } />
	<span class="LCHComposeBuildPageRecipesEnabledFieldLabel">{ OLSKLocalized('LCHComposeBuildPageRecipesEnabledFieldLabelText') }</span>
</label>
	
</div>

<style>
.LCHComposeBuildRunLink {
	padding: 5px 10px;
	border: var(--OLSKCommonEdgeBorder);
	border-radius: 5px;

	margin-right: 5px;

	background: hsl(0, 0%, 97%);
}
</style>
