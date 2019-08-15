let localizationDictionary = JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`);
import OLSKInternational from 'OLSKInternational';
export const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedStringWithTranslationKeyAndTranslationDictionary(translationConstant, localizationDictionary[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

export const _LCHIsTestingBehaviour = function () {
	if (typeof require !== 'undefined') {
		return false;
	}

	if (typeof navigator === 'undefined') {
		return false;
	}

	return navigator.appName === 'Zombie';
};
