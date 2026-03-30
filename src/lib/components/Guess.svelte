<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { i18n } from "$lib/i18n/i18n.svelte";
    import type { Step } from "$lib/types/data";
    import {
        items,
        squareCoords,
        gridWidth,
        gridHeight,
        cellStep,
        cellSize,
    } from "$lib/data/chartLayout";

    export let activeStep: Step;
    export let activeColor: string;
    export let userGuess: number | null = null;
    export let hasGuessed: boolean = false;
    export let currentIndex: number = 0;
    export let totalSteps: number = 10;

    let hoverIndex: number | null = null;

    $: trueCount = Math.round(activeStep.percentage);

    function getFill(
        item: number,
        hIndex: number | null,
        guessed: boolean,
        uGuess: number | null,
        tCount: number,
    ) {
        if (!guessed) {
            if (uGuess !== null && item < uGuess) return activeColor;
            if (hIndex !== null && item <= hIndex) return activeColor;
            return "var(--empty-fill, #e0e0e0)";
        } else {
            let guess = uGuess || 0;
            if (guess <= tCount) {
                if (item < tCount) return activeColor;
                return "var(--empty-fill, #e0e0e0)";
            } else {
                if (item < guess) return activeColor;
                return "var(--empty-fill, #e0e0e0)";
            }
        }
    }

    function getOpacity(
        item: number,
        guessed: boolean,
        uGuess: number | null,
        tCount: number,
    ) {
        if (!guessed) {
            return 0.4;
        } else {
            let guess = uGuess || 0;
            if (guess <= tCount) {
                if (item >= guess && item < tCount) return 0.25;
                return 1.0;
            } else {
                if (item >= tCount && item < guess) return 0.25;
                return 1.0;
            }
        }
    }

    const dispatch = createEventDispatcher();

    function handleInteraction(item: number) {
        if (hasGuessed) return;
        userGuess = item + 1;
        hasGuessed = true;
        dispatch("guess", userGuess);
        hoverIndex = null;
    }
</script>

<div class="chart-container">
    <div class="stats">
        <div class="progress-counter">
            {currentIndex + 1} / {totalSteps}
        </div>
        {#if !hasGuessed}
            <h2 class="dynamic-guess-title" class:is-guessing={hoverIndex !== null}>
                {#if hoverIndex !== null}
                    {hoverIndex + 1}<span class="percent-symbol">%</span>
                {:else}
                    ?
                {/if}
            </h2>
            <p>
                {activeStep[i18n.language]?.guessQuestion ||
                    activeStep[i18n.language]?.question ||
                    i18n.t.common.notFound}
            </p>
            <p class="hint">
                {i18n.t.guess.clickHint}
            </p>
        {:else}
            {@const diff = (userGuess || 0) - trueCount}
            {@const isWin = Math.abs(diff) <= 5}

            <div class="reveal-numbers">
                <div class="reveal-item">
                    <span class="reveal-label">{i18n.t.guess.yourGuess}</span>
                    <h2 class="guess-number" style="color: {activeColor}; opacity: 0.45;">
                        {userGuess}%
                    </h2>
                </div>
                <div class="reveal-line"></div>
                <div class="reveal-item">
                    <span class="reveal-label">{i18n.t.guess.actual}</span>
                    <h2
                        class="actual-number"
                        style="color: {activeColor}; filter: brightness(1.1);"
                    >
                        {activeStep.percentage}%
                    </h2>
                </div>
            </div>

            <p class="question-text">
                {activeStep[i18n.language]?.guessQuestion ||
                    activeStep[i18n.language]?.question ||
                    i18n.t.common.notFound}
            </p>
            <p class="result {isWin ? 'win' : 'lose'}">
                {#if isWin}
                    <span style="font-weight: bold; color: {activeColor};">
                        {i18n.t.guess.winExact}
                    </span>
                    <span style="color: {activeColor};">{i18n.t.guess.winMargin}</span>
                {:else if diff > 0}
                    <span style="font-weight: bold; color: {activeColor};">
                        {i18n.t.guess.overshot}{diff}%.
                    </span>
                {:else}
                    <span style="font-weight: bold; color: {activeColor};">
                        {i18n.t.guess.short}{Math.abs(diff)}%.
                    </span>
                {/if}
            </p>
            <div class="slot-actions">
                <slot />
            </div>
        {/if}
    </div>
    <svg
        width={gridWidth}
        height={gridHeight}
        viewBox="0 0 {gridWidth} {gridHeight}"
        role="img"
        class:is-interactive={!hasGuessed}
        on:mouseleave={() => !hasGuessed && (hoverIndex = null)}
    >
        <g class="mobile-axis-labels">
            {#each [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as pct (pct)}
                {@const r = 10 - pct / 10}
                {@const yPx = (r + 1.0) * cellStep + cellSize / 2}
                <text
                    x={11.2 * cellStep}
                    y={yPx}
                    alignment-baseline="middle"
                    text-anchor="start"
                    class="axis-label"
                >
                    {pct}%
                </text>
            {/each}
        </g>

        {#each items as item (item)}
            {@const coords = squareCoords[item]}
            {@const x = coords.x * cellStep}
            {@const y = coords.y * cellStep}
            {@const fill = getFill(item, hoverIndex, hasGuessed, userGuess, trueCount)}
            {@const fillOpacity = getOpacity(item, hasGuessed, userGuess, trueCount)}

            <g
                class="waffle-cell-group"
                style="transform: translate({x}px, {y}px);"
                on:mouseenter={() => !hasGuessed && (hoverIndex = item)}
                on:click={() => handleInteraction(item)}
            >
                <rect
                    width={cellSize}
                    height={cellSize}
                    rx="4"
                    {fill}
                    opacity={fillOpacity}
                    class="waffle-shape square-shape"
                />
            </g>
        {/each}
    </svg>
</div>

<style>
    .chart-container {
        display: flex;
        align-items: center;
        gap: 4rem;
        width: 100%;
        max-width: 1000px;
        justify-content: space-between;
    }

    .stats {
        flex: 0 0 300px;
        min-width: 300px;
    }

    .progress-counter {
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: var(--text-muted);
        text-transform: uppercase;
        margin-bottom: 0.5rem;
    }

    .stats h2 {
        font-size: 3.5rem;
        margin: 0;
        line-height: 1;
        transition: color 400ms ease;
    }

    .is-guessing {
        color: var(--text-heading);
    }

    .percent-symbol {
        font-size: 2rem;
        opacity: 0.6;
    }

    .reveal-numbers {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 1rem;
    }

    .reveal-item {
        display: flex;
        flex-direction: column;
    }

    .reveal-label {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-muted);
        margin-bottom: 0.25rem;
    }

    .reveal-numbers h2 {
        font-size: 2.5rem;
    }

    .reveal-line {
        width: 2px;
        height: 40px;
        background-color: var(--border-subtle);
        margin-top: 1rem;
    }

    .question-text {
        font-size: 1.1rem;
        margin-top: 0.5rem;
        line-height: 1.4;
    }

    .stats p {
        font-size: 1.1rem;
        margin-top: 0.5rem;
    }

    .hint {
        color: var(--text-muted);
        font-style: italic;
        font-size: 0.9rem;
        margin-top: 1rem;
    }

    .result {
        font-weight: 600;
        margin-top: 1rem;
        padding: 0.5rem;
        border-radius: 4px;
        background: var(--bg-surface);
    }

    .slot-actions {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
    }

    .waffle-cell-group {
        transition: transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
        will-change: transform;
    }

    .is-interactive .waffle-cell-group {
        cursor: pointer;
    }

    .is-interactive .waffle-cell-group:hover .waffle-shape {
        transform: scale(1.1);
    }

    .waffle-shape {
        transition:
            fill 300ms ease,
            transform 300ms ease;
        transform-origin: 24px 24px;
    }

    .mobile-axis-labels {
        display: none;
        pointer-events: none;
    }

    .axis-label {
        font-size: 1.25rem;
        font-weight: 500;
        fill: var(--text-muted);
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        .dynamic-guess-title {
            display: none;
        }

        .mobile-axis-labels {
            display: block;
        }

        .chart-container {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
            width: 100%;
        }

        .chart-container svg {
            width: 100%;
            height: auto;
            max-width: 100%;
            max-height: 45vh;
        }

        .stats {
            max-width: 100%;
            flex: none;
        }

        .stats h2 {
            font-size: 3rem;
        }
    }
    @media (min-width: 769px) {
        .reveal-numbers {
            justify-content: flex-start;
        }

        .slot-actions {
            justify-content: flex-start;
        }
    }
</style>
