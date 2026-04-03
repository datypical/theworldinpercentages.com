import type { UpdateLog } from "$lib/types/data";

/*
 * CHANGELOG FORMATTING GUIDE
 * Versioning: Use SemVer (e.g., v1.0.0, v1.1.0)
 * Categories (Labels):
 *  - "Added" / "Añadido": New features, tools, pages, or data
 *  - "Changed" / "Cambiado": Updates or improvements to existing things
 *  - "Fixed" / "Corregido": Bugs or errors solved
 *  - "Removed" / "Eliminado": Outdated items taken out
 *
 * TODO: For future updates, automating the added data entries by mapping them directly from Steps.ts will be considered.
 */

export const updates: Record<"en" | "es", UpdateLog[]> = {
    en: [
        {
            version: "v1.1.0",
            date: "April 2026",
            title: "'Guess' mode, new data and user interface update",
            changes: [
                {
                    label: "Added",
                    items: [
                        "New 'Guess' mode to test intuition",
                        "Scroll progress indicator",
                        {
                            text: "10 new global facts:",
                            subItems: [
                                "<a href='https://www.eiu.com/n/campaigns/democracy-index-2024/' target='_blank' rel='noopener noreferrer' class='inline-link'>Countries considered full democracies</a>",
                                "<a href='https://wir2026.wid.world/' target='_blank' rel='noopener noreferrer' class='inline-link'>Population owning 75% of global wealth</a>",
                                "<a href='https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/' target='_blank' rel='noopener noreferrer' class='inline-link'>Population with no religious affiliation</a>",
                                "<a href='https://www.ilo.org/publications/major-publications/child-labour-global-estimates-2024-trends-and-road-forward' target='_blank' rel='noopener noreferrer' class='inline-link'>Children engaged in child labour</a>",
                                "<a href='https://www.un.org/development/desa/pd/world-urbanization-prospects-2025' target='_blank' rel='noopener noreferrer' class='inline-link'>Global population living in cities</a>",
                                "<a href='https://www.unesco.org/en/days/literacy' target='_blank' rel='noopener noreferrer' class='inline-link'>Global adult literacy rate</a>",
                                "<a href='https://www.who.int/publications/i/item/9789240113817' target='_blank' rel='noopener noreferrer' class='inline-link'>Population living with a mental disorder</a>",
                                "<a href='https://www.who.int/publications/i/item/9789240116962' target='_blank' rel='noopener noreferrer' class='inline-link'>Women who have experienced violence</a>",
                                "<a href='https://ilga.org/laws-on-us-report/' target='_blank' rel='noopener noreferrer' class='inline-link'>Countries with full marriage equality</a>",
                                "<a href='https://www.unesco.org/gem-report/en' target='_blank' rel='noopener noreferrer' class='inline-link'>Children and youth out of school</a>",
                            ],
                        },
                    ],
                },
                {
                    label: "Changed",
                    items: [
                        {
                            text: "Expanded and reorganized data categories into 7 new themes (economy, education, environment, health, human rights, politics, society) for better filtering. The following initial facts were reclassified:",
                            subItems: [
                                "Population with access to safe drinking water: Health → Human Rights",
                                "Global electricity from renewable sources: Energy → Environment",
                                "Population living in extreme poverty: Society → Economy",
                                "Global population facing chronic hunger: Health → Human Rights",
                                "Global population with access to electricity: Energy → Human Rights",
                            ],
                        },
                        "Redesigned navigation buttons to enhance usability and accessibility",
                        "Optimized canonical links and sitemap structure",
                    ],
                },
            ],
        },
        {
            version: "v1.0.0",
            date: "March 2026",
            title: "Initial launch",
            changes: [
                {
                    label: "Added",
                    items: [
                        "Two interactive visualization formats using a 100-icon proportional scale",
                        "Category filters to explore facts by topic",
                        {
                            text: "10 initial global facts:",
                            subItems: [
                                "<a href='https://washdata.org/reports/jmp-2025-wash-households' target='_blank' rel='noopener noreferrer' class='inline-link'>Population with access to safe drinking water</a>",
                                "<a href='https://ember-energy.org/latest-insights/global-electricity-review-2025/' target='_blank' rel='noopener noreferrer' class='inline-link'>Global electricity from renewable sources</a>",
                                "<a href='https://unstats.un.org/sdgs/report/2025/' target='_blank' rel='noopener noreferrer' class='inline-link'>Population living in extreme poverty</a>",
                                "<a href='https://www.fao.org/publications/fao-flagship-publications/the-state-of-food-security-and-nutrition-in-the-world/en' target='_blank' rel='noopener noreferrer' class='inline-link'>Global population facing chronic hunger</a>",
                                "<a href='https://www.iea.org/reports/tracking-sdg7-the-energy-progress-report-2025' target='_blank' rel='noopener noreferrer' class='inline-link'>Global population with access to electricity</a>",
                                "<a href='https://nsidc.org/data/explore-data' target='_blank' rel='noopener noreferrer' class='inline-link'>Land area covered by ice</a>",
                                "<a href='https://www.iucnredlist.org/' target='_blank' rel='noopener noreferrer' class='inline-link'>Species threatened with extinction</a>",
                                "<a href='https://www.who.int/publications/i/item/9789240116276' target='_blank' rel='noopener noreferrer' class='inline-link'>Adults who consume tobacco</a>",
                                "<a href='https://www.un.org/development/desa/pd/content/international-migrant-stock' target='_blank' rel='noopener noreferrer' class='inline-link'>International migrant population</a>",
                                "<a href='https://www.fao.org/publications/fao-flagship-publications/the-state-of-the-worlds-forests/en' target='_blank' rel='noopener noreferrer' class='inline-link'>Land area covered by forests</a>",
                            ],
                        },
                        "Feedback and suggestion form",
                        "Methodology page with source documentation and selection criteria",
                        "Light and dark theme modes for better accessibility",
                        "Bilingual support (English and Spanish)",
                    ],
                },
            ],
        },
    ],
    es: [
        {
            version: "v1.1.0",
            date: "Abril 2026",
            title: "Modo 'Adivina', nuevos datos y actualización de la interfaz de usuario",
            changes: [
                {
                    label: "Agregado",
                    items: [
                        "Nuevo modo 'Adivina' para poner a prueba la intuición",
                        "Indicador de progreso de scroll",
                        {
                            text: "10 nuevos datos globales:",
                            subItems: [
                                "<a href='https://www.eiu.com/n/campaigns/democracy-index-2024/' target='_blank' rel='noopener noreferrer' class='inline-link'>Países considerados democracias plenas</a>",
                                "<a href='https://wir2026.wid.world/' target='_blank' rel='noopener noreferrer' class='inline-link'>Población que posee el 75% de la riqueza mundial</a>",
                                "<a href='https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/' target='_blank' rel='noopener noreferrer' class='inline-link'>Población sin afiliación religiosa</a>",
                                "<a href='https://www.ilo.org/publications/major-publications/child-labour-global-estimates-2024-trends-and-road-forward' target='_blank' rel='noopener noreferrer' class='inline-link'>Niños y niñas en situación de trabajo infantil</a>",
                                "<a href='https://www.un.org/development/desa/pd/world-urbanization-prospects-2025' target='_blank' rel='noopener noreferrer' class='inline-link'>Población mundial que vive en ciudades</a>",
                                "<a href='https://www.unesco.org/en/days/literacy' target='_blank' rel='noopener noreferrer' class='inline-link'>Tasa mundial de alfabetización en adultos</a>",
                                "<a href='https://www.who.int/publications/i/item/9789240113817' target='_blank' rel='noopener noreferrer' class='inline-link'>Población que vive con un trastorno mental</a>",
                                "<a href='https://www.who.int/publications/i/item/9789240116962' target='_blank' rel='noopener noreferrer' class='inline-link'>Mujeres que han sufrido violencia</a>",
                                "<a href='https://ilga.org/laws-on-us-report/' target='_blank' rel='noopener noreferrer' class='inline-link'>Países con matrimonio igualitario pleno</a>",
                                "<a href='https://www.unesco.org/gem-report/en' target='_blank' rel='noopener noreferrer' class='inline-link'>Niños y jóvenes fuera del sistema escolar</a>",
                            ],
                        },
                    ],
                },
                {
                    label: "Cambiado",
                    items: [
                        {
                            text: "Categorías de datos ampliadas y reorganizadas en 7 temáticas nuevas (economía, educación, medioambiente, salud, derechos humanos, política, sociedad) para un mejor filtrado. Se reclasificaron los siguientes datos iniciales:",
                            subItems: [
                                "Población con acceso a agua potable segura: Salud → Derechos humanos",
                                "Electricidad mundial por fuentes renovables: Energía → Medioambiente",
                                "Población en situación de pobreza extrema: Sociedad → Economía",
                                "Población mundial con hambre crónica: Salud → Derechos humanos",
                                "Población mundial con acceso a electricidad: Energía → Derechos humanos",
                            ],
                        },
                        "Rediseño de botones de navegación para facilitar su uso y accesibilidad",
                        "Optimización de los enlaces canónicos y la estructura del sitemap",
                    ],
                },
            ],
        },
        {
            version: "v1.0.0",
            date: "Marzo 2026",
            title: "Lanzamiento inicial",
            changes: [
                {
                    label: "Agregado",
                    items: [
                        "Dos formatos de visualización interactiva usando una escala proporcional de 100 íconos",
                        "Filtros por categorías para explorar los datos por tema",
                        {
                            text: "10 datos globales iniciales:",
                            subItems: [
                                "<a href='https://washdata.org/reports/jmp-2025-wash-households' target='_blank' rel='noopener noreferrer' class='inline-link'>Población con acceso a agua potable segura</a>",
                                "<a href='https://ember-energy.org/latest-insights/global-electricity-review-2025/' target='_blank' rel='noopener noreferrer' class='inline-link'>Electricidad mundial por fuentes renovables</a>",
                                "<a href='https://unstats.un.org/sdgs/report/2025/' target='_blank' rel='noopener noreferrer' class='inline-link'>Población en situación de pobreza extrema</a>",
                                "<a href='https://www.fao.org/publications/fao-flagship-publications/the-state-of-food-security-and-nutrition-in-the-world/en' target='_blank' rel='noopener noreferrer' class='inline-link'>Población mundial con hambre crónica</a>",
                                "<a href='https://www.iea.org/reports/tracking-sdg7-the-energy-progress-report-2025' target='_blank' rel='noopener noreferrer' class='inline-link'>Población mundial con acceso a electricidad</a>",
                                "<a href='https://nsidc.org/data/explore-data' target='_blank' rel='noopener noreferrer' class='inline-link'>Superficie terrestre cubierta por hielo</a>",
                                "<a href='https://www.iucnredlist.org/' target='_blank' rel='noopener noreferrer' class='inline-link'>Especies en peligro de extinción</a>",
                                "<a href='https://www.who.int/publications/i/item/9789240116276' target='_blank' rel='noopener noreferrer' class='inline-link'>Adultos que consumen tabaco</a>",
                                "<a href='https://www.un.org/development/desa/pd/content/international-migrant-stock' target='_blank' rel='noopener noreferrer' class='inline-link'>Población que es migrante internacional</a>",
                                "<a href='https://www.fao.org/publications/fao-flagship-publications/the-state-of-the-worlds-forests/en' target='_blank' rel='noopener noreferrer' class='inline-link'>Superficie terrestre cubierta por bosques</a>",
                            ],
                        },
                        "Formulario de contacto para comentarios y sugerencias",
                        "Página de metodología con documentación de fuentes y criterios de selección",
                        "Modos de tema claro y oscuro para una mejor accesibilidad",
                        "Soporte bilingüe (inglés y español)",
                    ],
                },
            ],
        },
    ],
};
