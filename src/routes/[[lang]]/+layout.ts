import { i18n } from "$lib/i18n/i18n.svelte";

export function load({ params }) {
    // Determine the lang from params, default to "en" if not found
    const lang = params.lang === "es" ? "es" : "en";

    // Set the store so all children receive it natively
    i18n.language = lang;

    return {
        lang,
    };
}
