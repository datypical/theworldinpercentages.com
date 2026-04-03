<script lang="ts">
    import { i18n } from "$lib/i18n/i18n.svelte";
</script>

<svelte:head>
    <title>{i18n.t.methodology.seoTitle}</title>
    <meta name="description" content={i18n.t.methodology.seoDescription} />
</svelte:head>

<div class="data-log-container">
    <header class="header">
        <div class="last-update">
            {i18n.t.methodology.lastUpdate}: {i18n.t.methodology.updates[0].date}
        </div>
        <h1>{i18n.t.methodology.title}</h1>
        <p class="subtitle">
            {i18n.t.methodology.subtitle}
        </p>
    </header>

    <main class="content">
        <section class="log-section">
            <h2>{i18n.t.methodology.dataCriteriaTitle}</h2>
            <p>{i18n.t.methodology.dataCriteriaText}</p>
        </section>

        <section class="log-section">
            <h2>{i18n.t.methodology.changelogTitle}</h2>

            {#each i18n.t.methodology.updates as update (update.version)}
                <div class="update-entry">
                    <div class="update-header">
                        <span class="version">{update.version}</span>
                        <span class="date">{update.date}</span>
                    </div>
                    <h3>{update.title}</h3>
                    <ul>
                        {#each update.changes as change (change.label)}
                            <li class="change-category">
                                <strong>{change.label}</strong>
                                <ul>
                                    {#each change.items as item (typeof item === "string" ? item : item.text)}
                                        {#if typeof item === "string"}
                                            <li>
                                                {@html item}
                                            </li>
                                        {:else}
                                            <li>
                                                {@html item.text}
                                                <ul class="sub-items">
                                                    {#each item.subItems as subItem (subItem)}
                                                        <li>
                                                            {@html subItem}
                                                        </li>
                                                    {/each}
                                                </ul>
                                            </li>
                                        {/if}
                                    {/each}
                                </ul>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </section>

        <section class="log-section">
            <h2>{i18n.t.methodology.contactTitle}</h2>
            <p>
                {@html i18n.t.methodology.contactText}
            </p>
        </section>
    </main>
</div>

<style>
    .data-log-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 4rem 2rem;
        color: var(--text-base);
    }

    .header {
        margin-bottom: 2rem;
        border-bottom: 1px solid var(--border-color, var(--border-subtle));
        padding-bottom: 1.5rem;
    }

    .header h1 {
        font-size: 2.5rem;
        color: var(--text-heading);
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .log-section h2 {
        font-size: 1.5rem;
        color: var(--text-heading);
        margin-bottom: 1.5rem;
    }

    .last-update {
        display: block;
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-muted);
        margin-bottom: 0.75rem;
        letter-spacing: 0.05em;
    }

    .subtitle {
        font-size: 1.1rem;
        color: var(--text-muted);
        line-height: 1.5;
        margin: 0;
    }

    .log-section {
        margin-bottom: 4rem;
    }

    .log-section p {
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    :global(.inline-link) {
        color: var(--text-heading);
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-color: var(--border-focus);
        transition: all 0.2s ease;
    }

    :global(.inline-link:hover) {
        text-decoration-color: var(--text-heading);
    }

    .update-entry {
        background: var(--bg-surface-alt);
        border: 1px solid var(--border-color, var(--border-subtle));
        border-radius: var(--radius-lg, 12px);
        padding: 2rem;
        margin-bottom: 2rem;
    }

    .update-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .version {
        background: var(--text-heading);
        color: var(--bg-canvas);
        padding: 0.2rem 0.6rem;
        border-radius: 4px;
    }

    .date {
        color: var(--text-muted);
    }

    .update-entry h3 {
        margin-top: 0;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
    }

    .update-entry > ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .change-category {
        margin-bottom: 1.2rem;
    }

    .change-category > strong {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-heading);
        font-size: 1rem;
    }

    .change-category ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .change-category ul li {
        margin-bottom: 0.8rem;
        line-height: 1.5;
        font-size: 0.95rem;
        padding-left: 1.5rem;
        position: relative;
    }

    .change-category ul li::before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--text-muted);
    }

    .change-category .sub-items {
        margin-top: 0.5rem;
        padding-left: 0;
    }

    .change-category .sub-items li {
        margin-bottom: 0.4rem;
        color: var(--text-muted);
    }

    :global(.change-category .sub-items li .inline-link) {
        color: var(--text-muted);
        text-decoration-color: var(--border-subtle);
    }

    :global(.change-category .sub-items li .inline-link:hover) {
        color: var(--text-body);
        text-decoration-color: var(--text-body);
    }

    .change-category .sub-items li::before {
        content: "-";
        color: var(--border-focus);
    }
</style>
