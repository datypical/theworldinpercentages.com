export interface LocalizedText {
    question: string;
    explanation: string;
    source?: string;
    guessQuestion?: string;
}

export type MonitorCheckType = "url_increment" | "page_content";

export interface MonitorConfig {
    name: string;
    checkType: MonitorCheckType;
    baseUrl: string;
    latestPublishedYear: number;
}

export interface Step {
    id: string;
    percentage: number;
    category?: string;
    sourceUrl?: string;
    monitor?: MonitorConfig;
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

export interface StoryStepText {
    title: string;
    text: string;
    barTitle: string;
    barComplement?: string;
}

export interface StoryStep {
    coloredCount: number;
    color: string;
    en: StoryStepText;
    es: StoryStepText;
}

export interface Story {
    id: string;
    interludeTitle: { en: string; es: string };
    interludeText: { en: string[]; es: string[] };
    steps: StoryStep[];
}

export type UpdateItem = string | { text: string; subItems: string[] };

export type UpdateCategory = {
    label: string;
    items: UpdateItem[];
};

export type UpdateLog = {
    version: string;
    date: string;
    title: string;
    changes: UpdateCategory[];
};
