<script lang="ts">
    import { i18n } from "$lib/i18n/i18n.svelte";
    import type { DisplayMode, InteractionMode } from "$lib/types/data";

    export let selectedCategory: string;
    export let interactionMode: InteractionMode;
    export let displayMode: DisplayMode;
    export let randomFinished: boolean;
    export let scrollDisabled: boolean = false;
    export let onModeChange: (mode: InteractionMode) => void;
    export let onRandomRoll: () => void;
</script>

<div class="view-picker">
    <div class="control-group category-control">
        <label for="category-mode">{i18n.t.controls.category || "Category"}</label>
        <select id="category-mode" bind:value={selectedCategory}>
            <option value="all">{i18n.t.controls.catAll || "All"}</option>
            <option value="technology"
                >{i18n.t.controls.catTechnology || "Technology"}</option
            >
            <option value="demography"
                >{i18n.t.controls.catDemography || "Demography"}</option
            >
            <option value="health">{i18n.t.controls.catHealth || "Health"}</option>
        </select>
    </div>

    <div class="control-group interaction-control">
        <span class="group-label">{i18n.t.controls.interactionMode}</span>
        <div class="toggle-buttons">
            <button
                class="icon-toggle-btn"
                class:active={interactionMode === "scroll"}
                on:click={() => onModeChange("scroll")}
                title={i18n.t.controls.modeScroll}
                aria-label={i18n.t.controls.modeScroll}
                disabled={scrollDisabled}
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
                    <rect x="5" y="2" width="14" height="20" rx="7" />
                    <line x1="12" y1="6" x2="12" y2="10" />
                </svg>
            </button>

            <button
                class="icon-toggle-btn"
                class:active={interactionMode === "random"}
                on:click={() => onModeChange("random")}
                title={i18n.t.controls.modeRandom}
                aria-label={i18n.t.controls.modeRandom}
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 14v-8a2 2 0 0 1 2 -2h8" />
                    <path d="M4 14a2 2 0 0 0 2 2h8" />
                    <path d="M14 4l-2 -2" />
                    <path d="M14 4l-2 2" />
                    <path d="M14 16l-2 -2" />
                    <path d="M14 16l-2 2" />
                    <rect x="14" y="8" width="6" height="12" rx="2" />
                    <path d="M17 12l0 .01" />
                    <path d="M17 17l0 .01" />
                </svg>
            </button>

            {#if interactionMode === "random"}
                <div class="divider"></div>
                <button
                    class="action-btn"
                    on:click={onRandomRoll}
                    disabled={randomFinished}
                    title={i18n.t.controls.nextEntry}
                    aria-label={i18n.t.controls.nextEntry}
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
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
                        <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
                        <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />
                        <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
                        <circle cx="12" cy="12" r=".5" fill="currentColor" />
                    </svg>
                </button>
            {/if}
        </div>
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
        border-radius: 999px;
        padding: 0.38rem 0.9rem;
        font-size: 0.82rem;
        background: var(--bg-surface);
        color: var(--text-body);
        backdrop-filter: blur(6px);
        outline: none;
        min-width: 180px;
        text-align: center;
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
        border-radius: 999px;
        padding: 0.2rem;
        backdrop-filter: blur(6px);
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

    .divider {
        width: 1px;
        height: 20px;
        background: var(--border-subtle);
        margin: 0 0.25rem;
    }

    .action-btn {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.3rem 0.8rem;
        font-size: 0.75rem;
        font-weight: 600;
        border-radius: 999px;
        border: none;
        background: var(--text-body);
        color: var(--bg-surface);
        cursor: pointer;
        transition:
            opacity 0.2s ease,
            transform 0.1s ease;
    }

    .action-btn:hover:not(:disabled) {
        opacity: 0.85;
    }

    .action-btn:active:not(:disabled) {
        transform: scale(0.95);
    }

    .action-btn:disabled {
        opacity: 0.5;
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

        .category-control,
        .interaction-control {
            display: none;
        }

        .view-picker label,
        .view-picker .group-label {
            display: none;
        }
    }
</style>
