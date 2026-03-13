import { translations, type Language } from "./translations";

function createI18n() {
    let currentLanguage = $state<Language>("en");

    return {
        get language() {
            return currentLanguage;
        },
        set language(lang: Language) {
            currentLanguage = lang;
        },
        get t() {
            return translations[currentLanguage];
        },
    };
}

export const i18n = createI18n();
