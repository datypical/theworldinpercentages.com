<script lang="ts">
    import Scrolly from "$lib/helpers/Scrolly.svelte";
    import Controls from "./Controls.svelte";
    import Chart from "./Chart.svelte";
    import Footer from "./Footer.svelte";
    import { STEPS, STEP_COLORS } from "$lib/data/Steps";
    import { i18n } from "$lib/i18n/i18n.svelte";
    import type { DisplayMode, InteractionMode } from "$lib/types/data";

    let currentStep = -1;
    let displayMode: DisplayMode = "shape";
    let interactionMode: InteractionMode = "scroll";
    let selectedStepIndex = 0;
    let selectedCategory = "all";

    $: filteredSteps = STEPS.map((step, originalIndex) => ({
        step,
        originalIndex,
    })).filter((s) => selectedCategory === "all" || s.step.category === selectedCategory);

    let randomPool: number[] = [];
    let randomFinished = false;
    let scrollDisabled = false;

    $: activeStepIndex = interactionMode === "scroll" ? currentStep : selectedStepIndex;

    $: safeActiveIndex = Math.max(0, Math.min(activeStepIndex, filteredSteps.length - 1));
    $: activeStepWrap =
        filteredSteps.length > 0
            ? filteredSteps[safeActiveIndex]
            : { step: STEPS[0], originalIndex: 0 };
    $: activeColors =
        STEP_COLORS[Math.max(0, activeStepWrap.originalIndex) % STEP_COLORS.length];

    function handleModeChange(mode: InteractionMode) {
        if (interactionMode !== mode) {
            interactionMode = mode;
            if (mode === "random") {
                randomPool = filteredSteps
                    .map((_, i) => i)
                    .filter((i) => i !== activeStepIndex);
                randomFinished = false;
            } else {
                randomFinished = false;
            }
        }
    }

    function handleRandomRoll() {
        scrollDisabled = true;

        if (randomPool.length === 0) {
            randomFinished = true;
            setTimeout(() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }, 100);
            return;
        }

        const randomIndex = Math.floor(Math.random() * randomPool.length);
        selectedStepIndex = randomPool.splice(randomIndex, 1)[0];
        randomFinished = false;
    }

    $: if (selectedCategory) {
        interactionMode = "scroll";
        currentStep = 0;
        selectedStepIndex = 0;
        randomFinished = false;
        scrollDisabled = false;
    }
</script>

<section class="l-section">
    <Controls
        bind:selectedCategory
        {interactionMode}
        bind:displayMode
        {randomFinished}
        {scrollDisabled}
        onModeChange={handleModeChange}
        onRandomRoll={handleRandomRoll}
    />

    <div class="sticky" class:is-fixed={interactionMode === "random"}>
        <div class="visualization">
            <Chart {displayMode} {activeStepWrap} {activeColors} />
        </div>

        {#if interactionMode === "random" && filteredSteps.length > 0}
            <div class="minimal-random-info">
                <span class="random-category">{activeStepWrap.step.category}</span>
                <span class="random-desc"
                    >{activeStepWrap.step[i18n.language]?.explanation ||
                        i18n.t.common.notFound}</span
                >
                <span class="random-source">{i18n.t.common.source}</span>
            </div>
        {/if}
    </div>

    <div class="steps" style="display: {interactionMode === 'scroll' ? 'block' : 'none'}">
        <Scrolly bind:value={currentStep}>
            {#each filteredSteps as item, i (item.originalIndex)}
                <div class="step" class:active={currentStep === i}>
                    <div class="step-content">
                        <p>
                            {item.step[i18n.language]?.explanation ||
                                i18n.t.common.notFound}
                        </p>
                        <p class="source">{i18n.t.common.source}</p>
                    </div>
                </div>
            {/each}
        </Scrolly>
    </div>
</section>

{#if interactionMode === "scroll" || (interactionMode === "random" && randomFinished)}
    <Footer />
{/if}

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

    .sticky.is-fixed {
        position: relative;
        min-height: 100vh;
        height: auto;
        padding: 2rem 0;
    }

    .visualization {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .minimal-random-info {
        position: absolute;
        bottom: 12vh;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.2rem;
        text-align: center;
        width: 90%;
        max-width: 450px;
        opacity: 0;
        animation: fadeIn 0.4s ease forwards;
        pointer-events: none;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }

    .minimal-random-info .random-category {
        font-size: 0.65rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--text-muted);
        opacity: 0.7;
    }

    .minimal-random-info .random-desc {
        font-size: 0.85rem;
        font-weight: 400;
        color: var(--text-muted);
        line-height: 1.3;
    }

    .minimal-random-info .random-source {
        font-size: 0.6rem;
        color: var(--text-muted);
        opacity: 0.4;
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
