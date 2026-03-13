import type { Step } from "$lib/types/data";

export const STEP_COLORS = [
    { color: "#1DA1F2", emptyColor: "var(--empty-fill)" },
    { color: "#ea90d7", emptyColor: "var(--empty-fill)" },
    { color: "#009464", emptyColor: "var(--empty-fill)" },
    { color: "#F45D22", emptyColor: "var(--empty-fill)" },
];

export const STEPS: Step[] = [
    {
        id: "step_1",
        percentage: 62,
        category: "technology",
        en: {
            question: "EN - Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            explanation:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        es: {
            question: "ES - Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            explanation:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
    },
    {
        id: "step_2",
        percentage: 24,
        category: "technology",
        en: {
            question:
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
            explanation:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        es: {
            question:
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
            explanation:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
    },
    {
        id: "step_3",
        percentage: 89,
        category: "demography",
        en: {
            question: "Ut enim ad minim veniam, quis nostrud exercitation ullamco?",
            explanation:
                "Sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        },
        es: {
            question: "Ut enim ad minim veniam, quis nostrud exercitation ullamco?",
            explanation:
                "Sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        },
    },
    {
        id: "step_4",
        percentage: 45,
        category: "technology",
        en: {
            question:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?",
            explanation:
                "Phasellus vestibulum lorem sed risus ultricies tristique nulla. Dictum aliquam porta non pulvinar neque laoreet suspendisse interdum consectetur libero id.",
        },
        es: {
            question:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?",
            explanation:
                "Phasellus vestibulum lorem sed risus ultricies tristique nulla. Dictum aliquam porta non pulvinar neque laoreet suspendisse interdum consectetur libero id.",
        },
    },
    {
        id: "step_5",
        percentage: 77,
        category: "health",
        en: {
            question:
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia?",
            explanation:
                "Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Velit euismod in pellentesque massa placerat duis ultricies lacus sed.",
        },
        es: {
            question:
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia?",
            explanation:
                "Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Velit euismod in pellentesque massa placerat duis ultricies lacus sed.",
        },
    },
];
