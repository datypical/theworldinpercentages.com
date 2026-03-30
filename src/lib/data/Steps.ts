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
        percentage: 74,
        category: "health",
        sourceUrl: "https://washdata.org/reports/jmp-2025-wash-households",
        en: {
            question: "Population with access to safe drinking water",
            guessQuestion:
                "What percentage of the global population has access to safe drinking water?",
            explanation:
                "74% have safely managed water. However, 1 in 4 people still lack access to this basic service",
            source: "JMP 2025 | WHO and UNICEF",
        },
        es: {
            question: "Población con acceso a agua potable segura",
            guessQuestion:
                "¿Qué porcentaje de la población mundial tiene acceso a agua potable segura?",
            explanation:
                "El 74% cuenta con agua gestionada de forma segura. Sin embargo, 1 de cada 4 personas aún carece de este servicio básico",
            source: "JMP 2025 | OMS y UNICEF",
        },
    },
    {
        id: "step_2",
        percentage: 32,
        category: "energy",
        sourceUrl:
            "https://ember-energy.org/latest-insights/global-electricity-review-2025/",
        en: {
            question: "Global electricity from renewable sources",
            guessQuestion:
                "What percentage of global electricity comes from renewable sources?",
            explanation:
                "Renewables generate 32% of global electricity, led by hydropower, wind, and solar energy",
            source: "Global Electricity Review 2025 | Ember",
        },
        es: {
            question: "Electricidad mundial por fuentes renovables",
            guessQuestion:
                "¿Qué porcentaje de la electricidad mundial proviene de fuentes renovables?",
            explanation:
                "Las renovables generan el 32% de la electricidad global, lideradas por la energía hidroeléctrica, eólica y solar",
            source: "Revisión Eléctrica Global 2025 | Ember",
        },
    },
    {
        id: "step_3",
        percentage: 10,
        category: "society",
        sourceUrl: "https://unstats.un.org/sdgs/report/2025/",
        en: {
            question: "Population living in extreme poverty",
            guessQuestion:
                "What percentage of the world population lives in extreme poverty?",
            explanation:
                "Affects 1 in 10 people (808 million). Eradicating it by 2030 is currently a highly unlikely goal",
            source: "The Sustainable Development Goals Report 2025 | United Nations",
        },
        es: {
            question: "Población en situación de pobreza extrema",
            guessQuestion:
                "¿Qué porcentaje de la población mundial vive en pobreza extrema?",
            explanation:
                "Afecta a 1 de cada 10 personas (808 millones). Erradicarla para 2030 es un objetivo muy improbable",
            source: "Informe sobre los Objetivos de Desarrollo Sostenible 2025 | Naciones Unidas",
        },
    },
    {
        id: "step_4",
        percentage: 8,
        category: "health",
        sourceUrl:
            "https://www.fao.org/publications/fao-flagship-publications/the-state-of-food-security-and-nutrition-in-the-world/en",
        en: {
            question: "Global population facing chronic hunger",
            guessQuestion:
                "What percentage of the global population faces chronic hunger?",
            explanation:
                "Affects roughly 673 million people. Although the figure dropped slightly in 2024, the food crisis persists",
            source: "The State of Food Security and Nutrition in the World 2025 | FAO, IFAD, WHO, WFP, and UNICEF",
        },
        es: {
            question: "Población mundial con hambre crónica",
            guessQuestion:
                "¿Qué porcentaje de la población mundial vive con hambre crónica?",
            explanation:
                "Afecta a unos 673 millones de personas. Aunque la cifra bajó levemente en 2024, la crisis alimentaria persiste",
            source: "El estado de la seguridad alimentaria y la nutrición en el mundo 2025 | FAO, FIDA, OMS, PMA y UNICEF",
        },
    },
    {
        id: "step_5",
        percentage: 93,
        category: "energy",
        sourceUrl:
            "https://www.iea.org/reports/tracking-sdg7-the-energy-progress-report-2025",
        en: {
            question: "Global population with access to electricity",
            guessQuestion:
                "What percentage of the world population has access to electricity?",
            explanation:
                "93% of the world has electricity. However, 666 million people—mostly in Africa—still live in the dark",
            source: "Energy Progress Report 2025 | IEA, IRENA, UNSD, the World Bank, and WHO",
        },
        es: {
            question: "Población mundial con acceso a electricidad",
            guessQuestion:
                "¿Qué porcentaje de la población mundial tiene acceso a electricidad?",
            explanation:
                "El 93% del mundo tiene luz. Sin embargo, 666 millones de personas siguen a oscuras",
            source: "Informe de Progreso Energético 2025 | AIE, IRENA, DEES, Banco Mundial y OMS",
        },
    },
    {
        id: "step_6",
        percentage: 10,
        category: "environment",
        sourceUrl: "https://nsidc.org/data/explore-data",
        en: {
            question: "Land area covered by ice",
            guessQuestion:
                "What percentage of the Earth's land is covered by permanent ice?",
            explanation:
                "10% of the land is covered by permanent ice, mostly concentrated in Antarctica and Greenland",
            source: "Global Ice and Snow Data | NSIDC",
        },
        es: {
            question: "Superficie terrestre cubierta por hielo",
            guessQuestion:
                "¿Qué porcentaje de la superficie terrestre está cubierta por hielo permanente?",
            explanation:
                "El 10% de la tierra está cubierta por hielo permanente, concentrado principalmente en la Antártida y Groenlandia",
            source: "Datos Globales de Nieve y Hielo | NSIDC",
        },
    },
    {
        id: "step_7",
        percentage: 28,
        category: "environment",
        sourceUrl: "https://www.iucnredlist.org/",
        en: {
            question: "Species threatened with extinction",
            guessQuestion:
                "What percentage of globally assessed species are threatened with extinction?",
            explanation:
                "Nearly 1 in 3 assessed species (over 48,600) is at risk of disappearing forever",
            source: "Red List of Threatened Species 2025-2 | IUCN",
        },
        es: {
            question: "Especies en peligro de extinción",
            guessQuestion:
                "¿Qué porcentaje de las especies evaluadas globalmente está en peligro de extinción?",
            explanation:
                "Casi 1 de cada 3 especies evaluadas (más de 48,600) está en riesgo de desaparecer para siempre",
            source: "Lista Roja de Especies Amenazadas 2025-2 | UICN",
        },
    },
    {
        id: "step_8",
        percentage: 20,
        category: "health",
        sourceUrl: "https://www.who.int/publications/i/item/9789240116276",
        en: {
            question: "Adults who consume tobacco",
            guessQuestion: "What percentage of adults worldwide consume tobacco?",
            explanation: "1 in 5 adults worldwide remains addicted to tobacco",
            source: "Global report on trends in prevalence of tobacco use 2000–2024 | WHO",
        },
        es: {
            question: "Adultos que consumen tabaco",
            guessQuestion: "¿Qué porcentaje de adultos en todo el mundo consume tabaco?",
            explanation:
                "1 de cada 5 adultos en el mundo mantiene una adicción al tabaco",
            source: "Informe mundial sobre tendencias en la prevalencia del tabaquismo 2000-2024 | OMS",
        },
    },
    {
        id: "step_9",
        percentage: 4,
        category: "society",
        sourceUrl:
            "https://www.un.org/development/desa/pd/content/international-migrant-stock",
        en: {
            question: "International migrant population",
            guessQuestion:
                "What percentage of the global population are international migrants?",
            explanation:
                "There are 304 million migrants. Today, 1 in 27 people worldwide lives outside their country of origin",
            source: "International Migrant Stock | United Nations",
        },
        es: {
            question: "Población que es migrante internacional",
            guessQuestion:
                "¿Qué porcentaje de la población mundial son migrantes internacionales?",
            explanation:
                "Hay 304 millones de migrantes. 1 de cada 27 personas en el mundo vive fuera de su país de origen",
            source: "Stock Internacional de Migrantes | Naciones Unidas",
        },
    },
    {
        id: "step_10",
        percentage: 31,
        category: "environment",
        sourceUrl:
            "https://www.fao.org/publications/fao-flagship-publications/the-state-of-the-worlds-forests/en",
        en: {
            question: "Land area covered by forests",
            guessQuestion:
                "What percentage of the Earth's land area is covered by forests?",
            explanation:
                "Forests cover 31% of the planet. Over half of this natural wealth is located in just five countries",
            source: "The State of the World's Forests 2024 | FAO",
        },
        es: {
            question: "Superficie terrestre cubierta por bosques",
            guessQuestion:
                "¿Qué porcentaje de la superficie terrestre está cubierta por bosques?",
            explanation:
                "Los bosques ocupan el 31% del planeta. Más de la mitad de esta riqueza natural se concentra en solo cinco países",
            source: "El estado de los bosques del mundo 2024 | FAO",
        },
    },
];
