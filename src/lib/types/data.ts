export interface LocalizedText {
    question: string;
    explanation: string;
}

export interface Step {
    id: string;
    percentage: number;
    category?: string;
    en: LocalizedText;
    es: LocalizedText;
}

export interface CircleNode {
    id: number;
    x: number;
    y: number;
    vx?: number;
    vy?: number;
}

export type DisplayMode = "shape" | "waffle";
export type InteractionMode = "scroll" | "random";
