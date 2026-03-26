import { updates } from "$lib/data/updates";

export const translations = {
    en: {
        seo: {
            title: "The World in Percentages",
            description: "Exploring global data through interactive visualizations.",
        },
        common: {
            notFound: "Details not found.",
        },
        error: {
            title: "Page not found",
            message:
                "Looks like you are lost. The data you are looking for doesn't exist in this percentage.",
            backHome: "Return to home",
        },
        home: {
            title: "The World in Percentages",
            intro: "A visual exploration of our world.",
            by: "By",
            explanation:
                "As you explore below, you'll discover facts about the global population. In this visualization, every single icon represents exactly 1% of humanity, making large global statistics easier to understand at a glance.",
        },
        controls: {
            interactionMode: "Interaction mode",
            modeScroll: "Scroll",
            modeRandom: "Random",
            displayType: "Display type",
            typeShape: "Shapes",
            typeWaffle: "Waffle chart",
            typeTheme: "Switch theme",
            nextEntry: "Next entry",
            question: "Question",
            category: "Category",
            catAll: "All categories",

            catHealth: "Health",
            catEnergy: "Energy",
            catSociety: "Society",
            catEnvironment: "Environment",
        },
        methodology: {
            seoTitle: "About the data | The World in Percentages",
            seoDescription:
                "Detailed information about the metrics, sources, and changes",
            title: "About the data",
            lastUpdate: "Last update",
            subtitle: "Source documentation, updates, and selection criteria",
            dataCriteriaTitle: "Data criteria",
            dataCriteriaText:
                "The data presented in this project consists of high-level global estimates. To make complex statistics easier to read and understand, percentages have been rounded to whole numbers. To ensure the reliability of the analysis, priority has been given to internationally recognized sources that are updated annually, which guarantees that the information reflects the most current global situation.",
            changelogTitle: "Updates log",
            contactTitle: "Contact",
            contactText:
                "If you have corrections or new verified sources, you can contribute via the <a href='/#contribute' class='inline-link'>form on the main page</a> or directly in the <a href='https://github.com/datypical/theworldinpercentages.com' target='_blank' rel='noopener noreferrer' class='inline-link'>repository</a>.",
            updates: updates.en,
        },
        end: {
            title: "No more data for now",
            message:
                "This visualization is constantly updated with new metrics. If you want to collaborate or suggest data, click here.",
            linkText: "Contribute",
            modal: {
                title: "Suggest a new fact",
                questionLabel: "Question",
                questionPlaceholder:
                    "e.g. Percentage of world population that is left-handed?",
                percentageLabel: "Percentage (1-100)",
                percentagePlaceholder: "e.g. 10",
                sourceLabel: "Source / Reference URL",
                sourcePlaceholder: "Include a link to verify the data",
                cancel: "Cancel",
                submit: "Submit proposal",
                githubPrompt: "Want to help maintain the code? ",
                githubLink: "Check out our GitHub",
                confirmation: "Thanks for your contribution!",
                closingMessage:
                    "Your suggestion has been successfully saved and will be reviewed for future updates.",
                close: "Close",
            },
        },
    },
    es: {
        seo: {
            title: "El mundo en porcentajes",
            description:
                "Explora datos globales a través de visualizaciones interactivas. Descubre qué porcentaje de la población mundial tiene acceso a internet, usa redes sociales y más.",
        },
        common: {
            notFound: "Detalles no encontrados.",
        },
        error: {
            title: "Página no encontrada",
            message:
                "Parece que te has perdido. El dato que buscas no existe en este porcentaje.",
            backHome: "Volver al inicio",
        },
        home: {
            title: "El mundo en porcentajes",
            intro: "Una exploración visual de nuestro mundo.",
            by: "Por",
            explanation:
                "A medida que exploras, descubrirás realidades sobre la población global. En esta visualización, cada ícono representa exactamente al 1% de la humanidad, acercándonos a estadísticas que suelen ser difíciles de dimensionar.",
        },
        controls: {
            interactionMode: "Modo de interacción",
            modeScroll: "Scroll",
            modeRandom: "Aleatorio",
            displayType: "Tipo de visualización",
            typeShape: "Formas",
            typeWaffle: "Gráfico de waffle",
            typeTheme: "Cambiar tema",
            nextEntry: "Siguiente dato",
            question: "Pregunta",
            category: "Categoría",
            catAll: "Todas las categorías",

            catHealth: "Salud",
            catEnergy: "Energía",
            catSociety: "Sociedad",
            catEnvironment: "Medioambiente",
        },
        methodology: {
            seoTitle: "Sobre los datos | El Mundo en Porcentajes",
            seoDescription:
                "Información detallada sobre las métricas, fuentes y cambios.",
            title: "Sobre los datos",
            lastUpdate: "Última actualización",
            subtitle:
                "Documentación de fuentes, actualizaciones y criterios de selección",
            dataCriteriaTitle: "Criterios de datos",
            dataCriteriaText:
                "Los datos presentados en este proyecto corresponden a estimaciones globales de alto nivel. Con el fin de facilitar la legibilidad y la comprensión visual de estadísticas complejas, los porcentajes se han redondeado a números enteros. Para garantizar la fiabilidad del análisis, se ha priorizado el uso de fuentes de prestigio internacional con actualización anual, asegurando que la información refleje el panorama global más reciente.",
            changelogTitle: "Registro de actualizaciones",
            contactTitle: "Contacto",
            contactText:
                "Si tienes correcciones o nuevas fuentes verificadas, puedes contribuir a través del <a href='/es#contribute' class='inline-link'>formulario en la página principal</a> o directamente en el <a href='https://github.com/datypical/theworldinpercentages.com' target='_blank' rel='noopener noreferrer' class='inline-link'>repositorio</a>.",
            updates: updates.es,
        },
        end: {
            title: "No hay más datos por ahora",
            message:
                "Esta visualización se actualiza constantemente con nuevas métricas. Si quieres colaborar o sugerir datos, haz clic aquí.",
            linkText: "Colaborar",
            modal: {
                title: "Sugerir un nuevo dato",
                questionLabel: "Pregunta",
                questionPlaceholder: "Ej. ¿Porcentaje de la población zurda?",
                percentageLabel: "Porcentaje (1-100)",
                percentagePlaceholder: "Ej. 10",
                sourceLabel: "URL de Fuente / Referencia",
                sourcePlaceholder: "Incluye un enlace para verificar el dato",
                cancel: "Cancelar",
                submit: "Enviar propuesta",
                githubPrompt: "¿Quieres ayudar a mantener el código? ",
                githubLink: "Visita nuestro GitHub",
                confirmation: "¡Gracias por tu aporte!",
                closingMessage:
                    "Tu sugerencia ha sido guardada con éxito y será revisada para futuras actualizaciones.",
                close: "Cerrar",
            },
        },
    },
} as const;

export type Language = keyof typeof translations;
