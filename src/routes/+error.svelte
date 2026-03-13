<script lang="ts">
    import { page } from "$app/state";
    import { i18n } from "$lib/i18n/i18n.svelte";
</script>

<div class="l-container error-container">
    <div class="error-content">
        <h1>{page.status}</h1>
        <h2>{page.error?.message || i18n.t.error.title}</h2>

        <p class="desc">{i18n.t.error.message}</p>

        <a href="/" class="btn-home">{i18n.t.error.backHome}</a>
    </div>
</div>

<style>
    .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100dvh;
        text-align: center;
    }

    .error-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        max-width: 500px;
        padding: 2rem;
    }

    h1 {
        font-size: clamp(6rem, 15vw, 120px);
        margin: 0;
        line-height: 1;
        color: var(--text-heading);
        font-weight: 800;
        letter-spacing: -0.05em;
    }

    h2 {
        font-size: 1.5rem;
        margin: 0;
        color: var(--text-body);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
    }

    .desc {
        color: var(--text-muted);
        font-size: 1.1rem;
        margin-bottom: 1rem;
        line-height: 1.5;
    }

    .btn-home {
        display: inline-block;
        padding: 0.8rem 1.8rem;
        background: var(--text-body);
        color: var(--bg-surface);
        text-decoration: none;
        border-radius: 999px;
        font-weight: 600;
        transition:
            transform 0.2s ease,
            opacity 0.2s ease;
    }

    .btn-home:hover {
        opacity: 0.85;
    }
</style>
