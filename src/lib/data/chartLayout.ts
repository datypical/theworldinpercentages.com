import { forceCollide, forceSimulation, forceManyBody, forceCenter } from "d3-force";
import type { CircleNode } from "$lib/types/data";

export const totalItems = 100;
export const items = Array.from({ length: totalItems }, (_, i) => i);

export const cellSize = 48;
export const cellGap = 12;
export const cellStep = cellSize + cellGap;
export const shapeScale = 2;
export const shapePadding = 6;

export const maxCols = 12;
export const maxRows = 12;
export const gridWidth = maxCols * cellSize + (maxCols - 1) * cellGap;
export const gridHeight = maxRows * cellSize + (maxRows - 1) * cellGap;

export const squareCoords = items.map((i) => {
    const row = 9 - Math.floor(i / 10);
    const col = i % 10;
    return { x: col + 1.0, y: row + 1.0 };
});

export const createCircleCoords = (): CircleNode[] => {
    const centerX = gridWidth / 2;
    const centerY = gridHeight / 2;

    const iconScale = shapeScale;
    const nodeRadius = 14 * iconScale;

    const boundaryRadius = nodeRadius * Math.sqrt(totalItems) * 1.1;

    const nodes: CircleNode[] = items.map((id) => ({
        id,
        x: (Math.random() - 0.5) * boundaryRadius,
        y: (Math.random() - 0.5) * boundaryRadius,
    }));

    function boundaryForce() {
        for (let node of nodes) {
            const dist = Math.sqrt(node.x * node.x + node.y * node.y);
            if (dist > boundaryRadius) {
                node.x = node.x * (boundaryRadius / dist);
                node.y = node.y * (boundaryRadius / dist);
            }
        }
    }

    const simulation = forceSimulation(nodes)
        .force(
            "collide",
            forceCollide()
                .radius(nodeRadius + 2)
                .iterations(4),
        )
        .force("charge", forceManyBody().strength(1))
        .force("center", forceCenter(0, 0))
        .force("boundary", boundaryForce)
        .stop();

    for (let tick = 0; tick < 300; tick++) {
        simulation.tick();
    }

    return nodes
        .map((node) => {
            node.x += centerX;
            node.y += centerY;
            return node;
        })
        .sort((a, b) => {
            const yA = Math.round(a.y / 5);
            const yB = Math.round(b.y / 5);
            if (yB !== yA) return yB - yA;
            return a.x - b.x;
        });
};

export const circleCoords = createCircleCoords();
