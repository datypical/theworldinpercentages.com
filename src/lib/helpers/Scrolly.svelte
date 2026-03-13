<script lang="ts">
    /**
     * Created by Russell Samora (https://github.com/russellsamora)
     * This component manages which item is most in view for scroll triggering
     * example:
     * <Scrolly
     * 	bind:value={scrollIndex}
     * >
     * **items here**
     * </Scrolly>
     *
     * optional params with defaults
     * <Scrolly root={null} top={0} bottom={0} increments={100}>
     */

    /**
     * The original version was adapted for this project
     */
    import { onDestroy, onMount } from "svelte";

    export let root: Element | null = null;
    export let top = 0;
    export let bottom = 0;
    export let increments: number | undefined = 100;
    export let value: number | undefined = undefined;

    increments = increments ?? 100;

    const steps: number[] = [];
    const threshold: number[] = [];

    let nodes: Element[] = [];
    const intersectionObservers: IntersectionObserver[] = [];
    let container: HTMLDivElement;
    let useFallback = false;
    let rafId: number | null = null;
    let scheduled = false;
    let scrollListener: (() => void) | null = null;

    const update = () => {
        if (!nodes.length) return;
        nodes.forEach(createObserver);
    };

    $: {
        const _top = top;
        const _bottom = bottom;
        void _top;
        void _bottom;
        update();
    }

    const mostInView = () => {
        let maxRatio = 0;
        let maxIndex = 0;
        for (let i = 0; i < steps.length; i++) {
            if (steps[i] > maxRatio) {
                maxRatio = steps[i];
                maxIndex = i;
            }
        }
        if (maxRatio > 0) value = maxIndex;
    };

    const createObserver = (node: Element, index: number) => {
        const handleIntersect = (e: IntersectionObserverEntry[]) => {
            const ratio = e[0].intersectionRatio;
            steps[index] = ratio;
            mostInView();
        };

        const marginTop = top ? top * -1 : 0;
        const marginBottom = bottom ? bottom * -1 : 0;
        const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
        const options: IntersectionObserverInit = {
            root: root as Element | null,
            rootMargin,
            threshold,
        };

        if (intersectionObservers[index]) intersectionObservers[index].disconnect();

        const io = new IntersectionObserver(handleIntersect, options);
        io.observe(node);
        intersectionObservers[index] = io;
    };

    onMount(() => {
        for (let i = 0; i < increments + 1; i++) {
            threshold.push(i / increments);
        }
        nodes = Array.from(container.querySelectorAll(":scope > *"));
        try {
            useFallback = typeof IntersectionObserver === "undefined";
        } catch {
            useFallback = true;
        }

        update();

        if (useFallback) {
            const compute = () => {
                if (!nodes.length) return;
                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i] as Element;
                    const rect = n.getBoundingClientRect();
                    const topRect = Math.max(rect.top, 0);
                    const bottomRect = Math.min(rect.bottom, window.innerHeight);
                    const visible = Math.max(0, bottomRect - topRect);
                    const ratio = rect.height > 0 ? visible / rect.height : 0;
                    steps[i] = ratio;
                }
                mostInView();
            };

            const tick = () => {
                scheduled = false;
                compute();
            };

            scrollListener = () => {
                if (!scheduled) {
                    scheduled = true;
                    rafId = requestAnimationFrame(tick);
                }
            };

            window.addEventListener("scroll", scrollListener, { passive: true });
            window.addEventListener("resize", scrollListener);
            compute();
        }
    });

    onDestroy(() => {
        intersectionObservers.forEach((io) => {
            io.disconnect();
        });
        if (scrollListener) {
            window.removeEventListener("scroll", scrollListener);
            window.removeEventListener("resize", scrollListener);
            scrollListener = null;
        }
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    });
</script>

<div bind:this={container}>
    <slot />
</div>
