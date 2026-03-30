<script lang="ts">
    import { onMount } from "svelte";

    let scrollY = $state(0);
    let innerHeight = $state(0);
    let scrollHeight = $state(0);

    let progress = $derived(
        scrollHeight > innerHeight
            ? Math.max(0, Math.min(1, scrollY / (scrollHeight - innerHeight)))
            : 0,
    );

    onMount(() => {
        const updateHeight = () => {
            scrollHeight = document.documentElement.scrollHeight;
        };

        updateHeight();
        const observer = new ResizeObserver(updateHeight);
        observer.observe(document.documentElement);

        return () => observer.disconnect();
    });
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="progress-widget vertical" aria-hidden="true">
    <div class="progress-track">
        <div class="progress-bar" style:transform="scaleY({progress})"></div>
    </div>
</div>

<style>
    .progress-widget.vertical {
        position: fixed;
        right: 1.25rem;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
        width: 16px;
        height: 350px;
        box-sizing: border-box;
        pointer-events: none;
        z-index: 50;
        opacity: 0.4;
    }

    .progress-track {
        width: 3px;
        height: 100%;
        background-color: var(--border-subtle);
        border-radius: var(--radius-pill);
        overflow: hidden;
    }

    .progress-bar {
        width: 100%;
        height: 100%;
        background-color: var(--text-heading);
        transform-origin: top center;
        transform: scaleY(0);
        transition: transform 0.15s cubic-bezier(0.1, 0.7, 0.1, 1);
        border-radius: var(--radius-pill);
    }

    @media (max-width: 768px) {
        .progress-widget.vertical {
            display: none;
        }
    }
</style>
