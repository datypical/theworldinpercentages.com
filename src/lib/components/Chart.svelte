<script lang="ts">
    import { i18n } from "$lib/i18n/i18n.svelte";
    import type { Step, DisplayMode } from "$lib/types/data";
    import {
        items,
        squareCoords,
        circleCoords,
        gridWidth,
        gridHeight,
        cellStep,
        cellSize,
        shapeScale,
    } from "$lib/data/chartLayout";

    export let displayMode: DisplayMode;
    export let activeStepWrap: { step: Step; originalIndex: number };
    export let activeColors: { color: string; emptyColor?: string };

    $: activeStep = activeStepWrap.step;
</script>

<div class="chart-container">
    <div class="stats">
        <h2 style="color: {activeColors.color}">
            {activeStep.percentage}%
        </h2>
        <p>
            {activeStep[i18n.language]?.question || i18n.t.common.notFound}
        </p>
    </div>
    <svg
        width={gridWidth}
        height={gridHeight}
        viewBox="0 0 {gridWidth} {gridHeight}"
        role="img"
        aria-label="Chart showing that {activeStep.percentage}% of the population answers affirmatively to: {activeStep[
            i18n.language
        ]?.question || i18n.t.common.notFound}"
    >
        {#each items as item (item)}
            {@const isSquare = displayMode === "waffle"}
            {@const coords = isSquare ? squareCoords[item] : circleCoords[item]}
            {@const x = isSquare ? coords.x * cellStep : coords.x}
            {@const y = isSquare ? coords.y * cellStep : coords.y}
            {@const isActive = item < activeStep.percentage}
            {@const fill = isActive
                ? activeColors.color
                : activeColors.emptyColor || "#e0e0e0"}

            <g
                class="waffle-cell-group"
                style="transform: translate({x}px, {y}px);"
                aria-hidden="true"
            >
                <!-- Waffle -->
                <rect
                    width={cellSize}
                    height={cellSize}
                    rx="4"
                    {fill}
                    class="waffle-shape square-shape"
                    style="opacity: {isSquare ? 1 : 0}; transform: scale({isSquare
                        ? 1
                        : 0.5});"
                />
                <!-- Shape -->
                <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    {fill}
                    class="waffle-shape circle-shape"
                    style="opacity: {isSquare
                        ? 0
                        : 1}; transform: translate(-12px, -12px) scale({isSquare
                        ? 0.5
                        : shapeScale});"
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
        flex: 0 0 200px;
        min-width: 200px;
    }

    .stats h2 {
        font-size: 3.5rem;
        margin: 0;
        line-height: 1;
        transition: color 400ms ease;
    }

    .stats p {
        font-size: 1rem;
        color: var(--text-muted);
        margin-top: 0.5rem;
    }

    .waffle-cell-group {
        transition: transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
        will-change: transform;
    }

    .waffle-shape {
        transition:
            fill 400ms ease,
            opacity 400ms ease,
            transform 400ms ease;
        transform-origin: center;
        will-change: transform, opacity, fill;
    }

    .square-shape {
        transform-origin: 24px 24px;
    }

    .circle-shape {
        transform-origin: 12px 12px;
    }

    @media (max-width: 768px) {
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
</style>
