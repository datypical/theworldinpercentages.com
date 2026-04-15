export function trackEvent(id: string, value?: number) {
    if (typeof fathom !== "undefined") {
        fathom.trackEvent(id, value);
    }
}
