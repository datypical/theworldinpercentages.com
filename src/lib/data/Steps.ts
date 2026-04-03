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
        category: "human rights",
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
        category: "environment",
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
        category: "economy",
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
        category: "human rights",
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
        category: "human rights",
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
                "¿Qué porcentaje de las especies evaluadas a nivel mundial está en peligro de extinción?",
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
    {
        id: "step_11",
        percentage: 15,
        category: "politics",
        sourceUrl: "https://www.eiu.com/n/campaigns/democracy-index-2024/",
        en: {
            question: "Countries considered full democracies",
            guessQuestion:
                "What percentage of countries in the world are considered full democracies?",
            explanation:
                "Only 15% of countries (25 nations) are full democracies. Meanwhile, the global democratic index continues its decline, driven by reversals in several regions and the hardening of authoritarian regimes",
            source: "Democracy Index 2024 | EIU",
        },
        es: {
            question: "Países considerados democracias plenas",
            guessQuestion:
                "¿Qué porcentaje de los países del mundo se consideran democracias plenas?",
            explanation:
                "Solo el 15% de los países (25 naciones) son democracias plenas. Mientras tanto, el índice global sigue cayendo, impulsado por retrocesos en varias regiones y el endurecimiento de regímenes autoritarios",
            source: "Índice de Democracia 2024 | EIU",
        },
    },
    {
        id: "step_12",
        percentage: 10,
        category: "economy",
        sourceUrl: "https://wir2026.wid.world/",
        en: {
            question: "Population owning 75% of global wealth",
            guessQuestion:
                "What percentage of the global population owns 75% of total wealth?",
            explanation:
                "Only the richest 10% of the world owns 75% of all existing wealth (properties, stocks, savings), highlighting a profound inequality",
            source: "World Inequality Report 2026 | World Inequality Lab",
        },
        es: {
            question: "Población que posee el 75% de la riqueza mundial",
            guessQuestion:
                "¿Qué porcentaje de la población mundial posee el 75% de la riqueza total?",
            explanation:
                "Solo el 10% más rico del mundo concentra el 75% de toda la riqueza existente (propiedades, acciones, ahorros), evidenciando una profunda desigualdad",
            source: "Informe sobre la Desigualdad Global 2026 | World Inequality Lab",
        },
    },
    {
        id: "step_13",
        percentage: 24,
        category: "society",
        sourceUrl:
            "https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/",
        en: {
            question: "Population with no religious affiliation",
            guessQuestion:
                "What percentage of the global population has no religious affiliation?",
            explanation:
                "Nearly 1 in 4 people worldwide do not identify with any religion",
            source: "How the Global Religious Landscape Changed From 2010 to 2020 | Pew Research Center",
        },
        es: {
            question: "Población sin afiliación religiosa",
            guessQuestion:
                "¿Qué porcentaje de la población mundial no tiene afiliación religiosa?",
            explanation:
                "Cerca de 1 de cada 4 personas en el mundo no se identifica con ninguna religión",
            source: "Cómo ha cambiado el panorama religioso mundial entre 2010 y 2020 | Pew Research Center",
        },
    },
    {
        id: "step_14",
        percentage: 8,
        category: "human rights",
        sourceUrl:
            "https://www.ilo.org/publications/major-publications/child-labour-global-estimates-2024-trends-and-road-forward",
        en: {
            question: "Children engaged in child labour",
            guessQuestion:
                "What percentage of children worldwide are engaged in child labour?",
            explanation:
                "Affects roughly 138 million children. Of these, 54 million are engaged in hazardous work that endangers their health and development",
            source: "Child Labour: Global estimates 2024 | ILO and UNICEF",
        },
        es: {
            question: "Niños y niñas en situación de trabajo infantil",
            guessQuestion:
                "¿Qué porcentaje de los niños del mundo se encuentra en situación de trabajo infantil?",
            explanation:
                "Afecta a unos 138 millones de niños. De ellos, 54 millones realizan trabajos peligrosos que ponen en riesgo su salud y desarrollo",
            source: "Trabajo Infantil: Estimaciones Mundiales 2024 | OIT y UNICEF",
        },
    },
    {
        id: "step_15",
        percentage: 45,
        category: "society",
        sourceUrl:
            "https://www.un.org/development/desa/pd/world-urbanization-prospects-2025",
        en: {
            question: "Global population living in cities",
            guessQuestion: "What percentage of the global population lives in cities?",
            explanation:
                "45% of the global population lives in cities. This figure represents more than double the proportion recorded in 1950",
            source: "World Urbanization Prospects 2025 | United Nations",
        },
        es: {
            question: "Población mundial que vive en ciudades",
            guessQuestion: "¿Qué porcentaje de la población mundial vive en ciudades?",
            explanation:
                "El 45% de la población mundial vive en ciudades. Esta cifra representa más del doble de la proporción registrada en 1950",
            source: "Perspectivas de Urbanización Mundial 2025 | Naciones Unidas",
        },
    },
    {
        id: "step_16",
        percentage: 88,
        category: "education",
        sourceUrl: "https://www.unesco.org/en/days/literacy",
        en: {
            question: "Global adult literacy rate",
            guessQuestion:
                "What percentage of the global adult population can read and write?",
            explanation:
                "The adult literacy rate reached 88% in 2024, reflecting steady progress and the expansion of basic education",
            source: "International Literacy Day 2025 | UNESCO",
        },
        es: {
            question: "Tasa mundial de alfabetización en adultos",
            guessQuestion:
                "¿Qué porcentaje de la población adulta mundial sabe leer y escribir?",
            explanation:
                "La tasa de alfabetización de adultos alcanzó el 88% en 2024, reflejando un progreso constante y la expansión de la educación básica",
            source: "Día Internacional de la Alfabetización 2025 | UNESCO",
        },
    },
    {
        id: "step_17",
        percentage: 14,
        category: "health",
        sourceUrl: "https://www.who.int/publications/i/item/9789240113817",
        en: {
            question: "Population living with a mental disorder",
            guessQuestion:
                "What percentage of the global population lives with a mental disorder?",
            explanation:
                "Affects over one billion people. Anxiety and depression are the most common disorders, and many still lack access to necessary treatment",
            source: "World Mental Health Report 2025 | WHO",
        },
        es: {
            question: "Población que vive con un trastorno mental",
            guessQuestion:
                "¿Qué porcentaje de la población mundial vive con un trastorno mental?",
            explanation:
                "Afecta a más de mil millones de personas. La ansiedad y la depresión son los trastornos más comunes, y muchos aún no reciben el tratamiento necesario",
            source: "Informe Mundial sobre Salud Mental 2025 | OMS",
        },
    },
    {
        id: "step_18",
        percentage: 30,
        category: "human rights",
        sourceUrl: "https://www.who.int/publications/i/item/9789240116962",
        en: {
            question: "Women who have experienced violence",
            guessQuestion:
                "What percentage of women worldwide have experienced physical or sexual violence?",
            explanation:
                "Nearly 1 in 3 women has been subjected to violence by a partner or sexual violence by a non-partner. This represents around 840 million women",
            source: "Violence against women prevalence estimates 2023 | WHO and United Nations",
        },
        es: {
            question: "Mujeres que han sufrido violencia",
            guessQuestion:
                "¿Qué porcentaje de mujeres en el mundo ha sufrido violencia física o sexual?",
            explanation:
                "Casi 1 de cada 3 mujeres ha sido víctima de violencia por parte de su pareja o violencia sexual por terceros. Representa a unas 840 millones de mujeres",
            source: "Estimaciones de prevalencia de la violencia contra la mujer 2023 | OMS y Naciones Unidas",
        },
    },
    {
        id: "step_19",
        percentage: 18,
        category: "politics",
        sourceUrl: "https://ilga.org/laws-on-us-report/",
        en: {
            question: "Countries with full marriage equality",
            guessQuestion:
                "What percentage of countries worldwide allow full marriage equality?",
            explanation:
                "Barely 18% of nations guarantee full marriage equality, showing that legal parity for the LGBTQ+ community remains a global minority",
            source: "Laws on Us",
        },
        es: {
            question: "Países con matrimonio igualitario pleno",
            guessQuestion:
                "¿Qué porcentaje de países en el mundo permite el matrimonio igualitario pleno?",
            explanation:
                "Apenas el 18% de los países garantiza la plena igualdad matrimonial, lo que demuestra que la igualdad jurídica para la comunidad LGBTQ+ sigue siendo una minoría a nivel mundial",
            source: "Laws on Us",
        },
    },
    {
        id: "step_20",
        percentage: 16,
        category: "human rights",
        sourceUrl: "https://www.unesco.org/gem-report/en",
        en: {
            question: "Children and youth out of school",
            guessQuestion:
                "What percentage of children and youth worldwide are excluded from the education system?",
            explanation:
                "About 273 million children and youth (1 in 6) are out of school. The figure has been rising in recent years after decades of decline",
            source: "Global Education Monitoring Report 2026 | UNESCO",
        },
        es: {
            question: "Niños y jóvenes fuera del sistema escolar",
            guessQuestion:
                "¿Qué porcentaje de niños y jóvenes en el mundo está excluido del sistema educativo?",
            explanation:
                "Unos 273 millones de niños y jóvenes (1 de cada 6) están fuera de la escuela. La cifra ha ido en aumento durante los últimos años tras decades de descenso",
            source: "Informe de Seguimiento de la Educación en el Mundo 2026 | UNESCO",
        },
    },
];
