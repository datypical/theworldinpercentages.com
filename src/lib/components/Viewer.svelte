<script lang="ts">
    import Scrolly from "$lib/helpers/Scrolly.svelte";
    import Controls from "./Controls.svelte";
    import Chart from "./Chart.svelte";
    import Footer from "./Footer.svelte";
    import { STEPS, STEP_COLORS } from "$lib/data/Steps";
    import { i18n } from "$lib/i18n/i18n.svelte";
    import type { DisplayMode } from "$lib/types/data";

    let currentStep = -1;
    let displayMode: DisplayMode = "shape";
    let selectedCategory = "all";

    $: filteredSteps = STEPS.map((step, originalIndex) => ({
        step,
        originalIndex,
    })).filter((s) => selectedCategory === "all" || s.step.category === selectedCategory);

    $: activeStepIndex = currentStep;
    $: safeActiveIndex = Math.max(0, Math.min(activeStepIndex, filteredSteps.length - 1));
    $: activeStepWrap =
        filteredSteps.length > 0
            ? filteredSteps[safeActiveIndex]
            : { step: STEPS[0], originalIndex: 0 };
    $: activeColors =
        STEP_COLORS[Math.max(0, activeStepWrap.originalIndex) % STEP_COLORS.length];

    let prevCategory = selectedCategory;
    $: if (selectedCategory !== prevCategory) {
        prevCategory = selectedCategory;
        currentStep = 0;
    }
</script>

<section class="l-section">
    <Controls bind:selectedCategory bind:displayMode />

    <div class="sticky">
        <div class="visualization">
            <Chart {displayMode} {activeStepWrap} {activeColors} />
        </div>
    </div>

    <div class="steps">
        <Scrolly bind:value={currentStep}>
            {#each filteredSteps as item, i (item.originalIndex)}
                <div class="step" class:active={currentStep === i}>
                    <div class="step-content">
                        <p>
                            {item.step[i18n.language]?.explanation ||
                                i18n.t.common.notFound}
                        </p>
                        {#if item.step.sourceUrl}
                            <p class="source">
                                <a
                                    href={item.step.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {i18n.language === "es"
                                        ? "Fuente: "
                                        : "Source: "}{item.step[i18n.language]?.source ||
                                        ""}
                                </a>
                            </p>
                        {:else if item.step.sourceUrl}
                            <p class="source">
                                <a
                                    href={item.step.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {i18n.language === "es"
                                        ? "Fuente: "
                                        : "Source: "}{item.step[i18n.language]?.source ||
                                        ""}
                                </a>
                            </p>
                        {:else}
                            <p class="source">
                                {i18n.language === "es" ? "Fuente: " : "Source: "}{item
                                    .step[i18n.language]?.source || ""}
                            </p>
                        {/if}
                    </div>
                </div>
            {/each}
        </Scrolly>
    </div>
</section>

<Footer />

<style>
    .sticky {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        overflow: hidden;
    }

    .visualization {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }

    .steps {
        position: relative;
        z-index: 2;
        margin-top: -100vh;
        padding-top: 100vh;
        padding-bottom: 50vh;
        pointer-events: none;
    }

    .step {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.3;
        transition: opacity 300ms ease;
    }

    .step.active {
        opacity: 1;
    }

    .step-content {
        background: var(--bg-surface);
        padding: 2rem;
        border-radius: var(--radius-m);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        text-align: center;
        font-size: 1.25rem;
        font-weight: 500;
        transform: translateY(20px);
        transition:
            transform 400ms ease,
            opacity 400ms ease;
        opacity: 0;
        color: var(--text-body);
        pointer-events: auto;
    }

    .step.active .step-content {
        transform: translateY(0);
        opacity: 1;
    }

    .step-content p {
        margin: 0;
        line-height: 1.5;
    }

    .step-content .source {
        font-size: 0.85rem;
        color: var(--text-muted);
        margin-top: 1rem;
        font-style: italic;
    }
</style>
