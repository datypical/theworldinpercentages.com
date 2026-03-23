export interface LocalizedText {
    question: string;
    explanation: string;
    source?: string;
}

export interface Step {
    id: string;
    percentage: number;
    category?: string;
    sourceUrl?: string;
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
