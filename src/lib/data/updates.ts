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
