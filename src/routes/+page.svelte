<script lang="ts">
    import Viewer from "$lib/components/Viewer.svelte";
    import { i18n } from "$lib/i18n/i18n.svelte";

    const canonicalUrl = "https://theworldinpercentages.com";

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
    <meta property="og:image" content="{canonicalUrl}/og-image.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={canonicalUrl} />
    <meta property="twitter:title" content={i18n.t.seo.title} />
    <meta property="twitter:description" content={i18n.t.seo.description} />
    <meta property="twitter:image" content="{canonicalUrl}/og-image.jpg" />

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

            <div class="wip-banner">
                <p>
                    This project is currently under construction. The data shown right now
                    is temporary and for sample purposes. Come back later!
                </p>
            </div>
        </div>

        <div class="l-container is-narrow introduction">
            <p class="text-intro">
                {i18n.t.home.explanation}
            </p>
        </div>
    </section>

    <Viewer />
</main>

<style>
    .wip-banner {
        margin-top: 2rem;
        padding: 1rem;
        background-color: rgba(255, 193, 7, 0.1);
        border: 1px dashed rgba(255, 193, 7, 0.4);
        border-radius: var(--radius-m);
        color: var(--text-heading);
        font-size: 0.95rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .wip-banner p {
        margin: 0;
        line-height: 1.5;
    }
</style>
