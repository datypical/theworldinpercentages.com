<script lang="ts">
    import Viewer from "$lib/components/Viewer.svelte";
    import { i18n } from "$lib/i18n/i18n.svelte";

    const baseUrl = "https://theworldinpercentages.com";
    $: canonicalUrl = baseUrl + (i18n.language === "es" ? "/es" : "");

    $: jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: i18n.t.seo.title,
        description: i18n.t.seo.description,
        url: canonicalUrl,
        author: [
            {
                "@type": "Person",
                name: "Juanchi Parra",
                url: "https://github.com/juanchiparra",
            },
            {
                "@type": "Organization",
                name: "Datypical Studio",
                url: "https://github.com/datypical",
            },
        ],
        publisher: {
            "@type": "Organization",
            name: "Datypical Studio",
        },
    };
</script>

<svelte:head>
    <title>{i18n.t.seo.title}</title>
    <meta name="description" content={i18n.t.seo.description} />
    <link rel="canonical" href={canonicalUrl} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:title" content={i18n.t.seo.title} />
    <meta property="og:description" content={i18n.t.seo.description} />
    <meta property="og:image" content="{baseUrl}/og-image.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={canonicalUrl} />
    <meta property="twitter:title" content={i18n.t.seo.title} />
    <meta property="twitter:description" content={i18n.t.seo.description} />
    <meta property="twitter:image" content="{baseUrl}/og-image.png" />

    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}

    <script
        src="https://cdn.usefathom.com/script.js"
        data-site="PSLAGHDJ"
        data-spa="auto"
        defer
    >
    </script>
</svelte:head>

<main class="l-container">
    <section class="l-section">
        <div class="l-header">
            <header><h1 class="page-title">{i18n.t.home.title}</h1></header>
            <p class="text-intro">
                {i18n.t.home.intro}
            </p>
            <span class="text-meta">
                {i18n.t.home.by}
                <a href="https://github.com/datypical" target="_blank">Datypical Studio</a
                ></span
            >
        </div>

        <div class="l-container is-narrow introduction">
            <p class="text-intro">
                {i18n.t.home.explanation}
            </p>
            <p class="text-intro play-invite">
                {i18n.t.home.guessInvite}
                <a
                    href={i18n.language === "es" ? "/es/guess" : "/guess"}
                    class="guess-link"
                    data-sveltekit-preload-data="tap"
                >
                    {i18n.t.home.guessInviteLink}
                </a>.
            </p>
        </div>
    </section>

    <Viewer />
</main>

<style>
    .play-invite {
        margin-top: 1rem;
        font-size: 1rem;
        color: var(--text-muted);
    }

    .guess-link {
        color: var(--text-heading);
        font-weight: 500;
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    .guess-link:hover {
        opacity: 0.8;
    }
</style>
