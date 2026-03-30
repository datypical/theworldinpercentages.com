<script lang="ts">
    import { STEPS, STEP_COLORS } from "$lib/data/Steps";
    import { i18n } from "$lib/i18n/i18n.svelte";
    import Guess from "$lib/components/Guess.svelte";

    let currentIndex = 0;
    let userGuess: number | null = null;
    let hasGuessed = false;

    let steps = [...STEPS];

    import { onMount } from "svelte";
    onMount(() => {
        steps.sort(() => Math.random() - 0.5);
        // Force reactivity update
        steps = steps;
    });

    $: activeStep = steps[currentIndex];
    $: activeColor = STEP_COLORS[currentIndex % STEP_COLORS.length].color;

    function nextQuestion() {
        if (currentIndex < steps.length - 1) {
            currentIndex++;
            userGuess = null;
            hasGuessed = false;
        } else {
            currentIndex = 0;
            userGuess = null;
            hasGuessed = false;
            steps.sort(() => Math.random() - 0.5);
            steps = steps;
        }
    }
</script>

<svelte:head>
    <title>{i18n.t.guess.title} - {i18n.t.home.title}</title>
</svelte:head>

<div class="guess-page">
    <header class="game-header">
        <div class="title-container">
            <h1>{i18n.t.guess.title}</h1>
            <p class="subtitle">
                {i18n.t.guess.subtitle}
            </p>
        </div>
    </header>

    <main class="game-board">
        {#if activeStep}
            <Guess
                {activeStep}
                {activeColor}
                {currentIndex}
                totalSteps={steps.length}
                bind:userGuess
                bind:hasGuessed
            >
                {#if hasGuessed}
                    <button class="next-btn" on:click={nextQuestion}>
                        {i18n.t.guess.nextQuestion}
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
                            ><path d="M5 12h14M12 5l7 7-7 7" /></svg
                        >
                    </button>
                {/if}
            </Guess>
        {/if}
    </main>
</div>

<style>
    .guess-page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 2rem 10vw;
        max-width: 1400px;
        margin: 0 auto;
    }

    .game-header {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 3rem;
        padding-top: 1rem;
    }

    .title-container {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
    }

    .title-container h1 {
        font-size: 2.5rem;
        color: var(--text-heading);
        margin: 0 0 0.5rem 0;
        line-height: 1.2;
    }

    .subtitle {
        font-size: 1.1rem;
        color: var(--text-muted);
        line-height: 1.5;
        margin: 0;
    }

    .game-board {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    }

    .next-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: #ffffff;
        color: #111111;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 999px;
        font-family: inherit;
        font-weight: 600;
        font-size: 1.1rem;
        cursor: pointer;
        transition:
            transform 0.2s,
            opacity 0.2s;
    }

    .next-btn:hover {
        transform: translateY(-2px);
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        .guess-page {
            padding: 5rem 5vw 2rem 5vw;
        }
    }
</style>
