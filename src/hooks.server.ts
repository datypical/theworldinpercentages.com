import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const lang = event.params.lang || "en";

    const response = await resolve(event, {
        transformPageChunk: ({ html }) => html.replace("%lang%", lang),
    });

    return response;
};
