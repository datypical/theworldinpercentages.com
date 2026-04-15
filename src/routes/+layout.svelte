<script lang="ts">
    import "$lib/styles/global.css";

    let { children } = $props();

    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { i18n } from "$lib/i18n/i18n.svelte";
    import { trackEvent } from "$lib/helpers/analytics";

    let theme = $state("dark");

    onMount(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            theme = savedTheme;
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            theme = "light";
        }
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.setAttribute("lang", i18n.language);
    });

    $effect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        }
    });

    $effect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.setAttribute("lang", i18n.language);
            localStorage.setItem("language", i18n.language);
        }
    });

    function toggleTheme() {
        theme = theme === "dark" ? "light" : "dark";
    }

    let isHomePage = $derived(
        $page.url.pathname === "/" ||
            $page.url.pathname === "/es" ||
            $page.url.pathname === "/es/",
    );
    let isDataPage = $derived($page.url.pathname.includes("/data"));
    let isGuessPage = $derived($page.url.pathname.includes("/guess"));

    let baseEnPath = $derived(
        $page.url.pathname.startsWith("/es")
            ? $page.url.pathname.substring(3)
            : $page.url.pathname,
    );
    let finalEnPath = $derived(baseEnPath === "/" ? "" : baseEnPath);

    let baseEsPath = $derived(
        $page.url.pathname.startsWith("/es")
            ? $page.url.pathname
            : "/es" + ($page.url.pathname === "/" ? "" : $page.url.pathname),
    );
    let finalEsPath = $derived(baseEsPath === "/es/" ? "/es" : baseEsPath);

    let currentPath = $derived(
        $page.url.pathname === "/" || $page.url.pathname === "/es/"
            ? $page.url.pathname.slice(0, -1)
            : $page.url.pathname.endsWith("/")
              ? $page.url.pathname.slice(0, -1)
              : $page.url.pathname,
    );
</script>

<svelte:head>
    <link rel="canonical" href="https://theworldinpercentages.com{currentPath || '/'}" />
    <link
        rel="alternate"
        hreflang="x-default"
        href="https://theworldinpercentages.com{finalEnPath}"
    />
    <link
        rel="alternate"
        hreflang="en"
        href="https://theworldinpercentages.com{finalEnPath}"
    />
    <link
        rel="alternate"
        hreflang="es"
        href="https://theworldinpercentages.com{finalEsPath}"
    />
</svelte:head>

<div class="global-controls">
    {#if !isHomePage}
        <a
            href={i18n.language === "es" ? "/es" : "/"}
            class="nav-link special"
            data-sveltekit-preload-data="tap"
            title={i18n.t.error.backHome}
        >
            ← {i18n.t.error.backHome}
        </a>
    {/if}

    {#if !isDataPage}
        <a
            href="{i18n.language === 'es' ? '/es' : ''}/data"
            class="nav-link"
            data-sveltekit-preload-data="tap"
            title={i18n.t.methodology.title}
        >
            {i18n.t.methodology.title}
        </a>
    {/if}
    <button
        class="icon-btn"
        onclick={toggleTheme}
        aria-label={i18n.t.controls.typeTheme}
        title={i18n.t.controls.typeTheme}
    >
        {#if theme === "dark"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><circle cx="12" cy="12" r="5" /><line
                    x1="12"
                    y1="1"
                    x2="12"
                    y2="3"
                /><line x1="12" y1="21" x2="12" y2="23" /><line
                    x1="4.22"
                    y1="4.22"
                    x2="5.64"
                    y2="5.64"
                /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line
                    x1="1"
                    y1="12"
                    x2="3"
                    y2="12"
                /><line x1="21" y1="12" x2="23" y2="12" /><line
                    x1="4.22"
                    y1="19.78"
                    x2="5.64"
                    y2="18.36"
                /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
            >
        {:else}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
            >
        {/if}
    </button>

    <select
        class="lang-select"
        value={i18n.language}
        onchange={(e) => {
            trackEvent("language changed");
            const target = e.target as HTMLSelectElement;
            const newLang = target.value;
            let currentPath = $page.url.pathname;

            if (currentPath.startsWith("/es/")) {
                currentPath = currentPath.substring(3) as any;
            } else if (currentPath === "/es") {
                currentPath = "/" as any;
            }

            if (newLang === "en") {
                goto(currentPath);
            } else {
                goto("/" + newLang + (currentPath === "/" ? "" : currentPath));
            }
        }}
        aria-label="Change language"
    >
        <option value="en">EN</option>
        <option value="es">ES</option>
    </select>
</div>

{@render children?.()}

<style>
    .nav-link {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-muted);
        text-decoration: none;
        padding: 0 0.8rem;
        border-radius: 999px;
        transition: all 0.2s ease;
        background: transparent;
        margin-right: 0.25rem;
        display: flex;
        align-items: center;
        height: 38px;
        line-height: 1;
    }

    .nav-link:hover {
        color: var(--text-heading);
        background: var(--bg-surface);
    }

    .nav-link.special {
        color: var(--text-heading);
    }

    .nav-link.special:hover {
        opacity: 0.9;
        text-decoration: underline;
        color: var(--text-heading);
    }

    @media (max-width: 600px) {
        .nav-link {
            font-size: 0.8rem;
            padding: 0 0.5rem;
            margin-right: 0;
            white-space: nowrap;
        }

        .global-controls {
            gap: 0.4rem;
        }
    }

    .global-controls {
        position: fixed;
        top: 1rem;
        right: 1.5rem;
        display: flex;
        gap: 0.75rem;
        align-items: center;
        z-index: 50;
    }

    .icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border: 1px solid var(--border-subtle);
        border-radius: 50%;
        background: var(--bg-surface);
        color: var(--text-body);
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .icon-btn:hover {
        border-color: var(--border-focus);
        color: var(--text-heading);
    }

    .icon-btn:active {
        transform: scale(0.95);
    }

    .lang-select {
        border: 1px solid var(--border-subtle);
        border-radius: 999px;
        padding: 0.38rem 0.9rem;
        font-size: 0.85rem;
        font-weight: 600;
        background: var(--bg-surface);
        color: var(--text-body);
        backdrop-filter: blur(6px);
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .lang-select:focus,
    .lang-select:hover {
        border-color: var(--border-focus);
        color: var(--text-heading);
    }
</style>
