<script lang="ts">
    import { i18n } from "$lib/i18n/i18n.svelte";
    import type { DisplayMode } from "$lib/types/data";
    import ScrollProgress from "./ScrollProgress.svelte";
    import { CATEGORIES } from "$lib/data/Categories";

    export let selectedCategory: string;
    export let displayMode: DisplayMode;
</script>

<div class="view-picker">
    <div class="control-group category-control">
        <label for="category-mode">{i18n.t.controls.category || "Category"}</label>
        <select id="category-mode" bind:value={selectedCategory}>
            <option value="all">{i18n.t.controls.catAll || "All"}</option>
            {#each CATEGORIES as category (category.id)}
                <option value={category.id}
                    >{i18n.t.controls[category.key] || category.id}</option
                >
            {/each}
        </select>
    </div>

    <div class="control-group display-control">
        <span class="group-label">{i18n.t.controls.displayType}</span>
        <div class="toggle-buttons">
            <button
                class="icon-toggle-btn"
                class:active={displayMode === "shape"}
                on:click={() => (displayMode = "shape")}
                title={i18n.t.controls.typeShape}
                aria-label={i18n.t.controls.typeShape}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </button>

            <button
                class="icon-toggle-btn"
                class:active={displayMode === "waffle"}
                on:click={() => (displayMode = "waffle")}
                title={i18n.t.controls.typeWaffle}
                aria-label={i18n.t.controls.typeWaffle}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
            </button>
        </div>
    </div>
</div>

<ScrollProgress />

<style>
    .view-picker {
        position: sticky;
        top: 0.9rem;
        z-index: 4;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        pointer-events: none;
    }

    .control-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
    }

    .view-picker label,
    .view-picker .group-label {
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        color: var(--text-muted);
    }

    .view-picker select {
        pointer-events: auto;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-pill);
        padding: 0 0.9rem;
        font-size: 0.82rem;
        background: var(--bg-surface);
        color: var(--text-body);
        backdrop-filter: blur(6px);
        outline: none;
        min-width: 180px;
        text-align: center;
        height: 42px;
        box-sizing: border-box;
    }

    .view-picker select:focus {
        border-color: var(--border-focus);
    }

    .toggle-buttons {
        pointer-events: auto;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-pill);
        padding: 0.2rem;
        backdrop-filter: blur(6px);
        height: 42px;
        box-sizing: border-box;
    }

    .icon-toggle-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 50%;
        background: transparent;
        color: var(--text-muted);
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .icon-toggle-btn:hover:not(:disabled) {
        color: var(--text-body);
        background: var(--bg-surface-hover, rgba(0, 0, 0, 0.05));
    }

    .icon-toggle-btn.active {
        color: var(--bg-surface);
        background: var(--text-body);
    }

    .icon-toggle-btn:active:not(:disabled) {
        transform: scale(0.95);
    }

    .icon-toggle-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    .icon-toggle-btn.active {
        color: var(--bg-surface);
        background: var(--text-body);
    }

    .icon-toggle-btn:active {
        transform: scale(0.95);
    }

    @media (max-width: 768px) {
        .view-picker {
            position: fixed;
            top: 1rem;
            left: 1rem;
            width: auto;
            justify-content: flex-start;
            padding: 0;
            z-index: 50;
        }

        .category-control {
            display: none;
        }

        .view-picker label,
        .view-picker .group-label {
            display: none;
        }
    }
</style>
