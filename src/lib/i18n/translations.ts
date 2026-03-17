export const translations = {
    en: {
        seo: {
            title: "The World in Percentage",
            description: "Exploring global data through interactive visualizations.",
        },
        common: {
            source: "Source: Fictitious Global Survey, 2026",
            notFound: "Details not found.",
        },
        error: {
            title: "Page not found",
            message:
                "Looks like you are lost. The data you are looking for doesn't exist in this percentage.",
            backHome: "Return to home",
        },
        home: {
            title: "The World in Percentage",
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
            nextEntry: "Next entry",
            question: "Question",
            category: "Category",
            catAll: "All categories",
            catTechnology: "Technology",
            catDemography: "Demographics",
            catHealth: "Health",
        },
        end: {
            title: "No more data for now",
            message:
                "This visualization is constantly updated with new metrics. If you want to collaborate or suggest data, click here.",
            linkText: "Contribute to the project",
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
            source: "Fuente: Encuesta Global Ficticia, 2026",
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
            nextEntry: "Siguiente dato",
            question: "Pregunta",
            category: "Categoría",
            catAll: "Todas las categorías",
            catTechnology: "Tecnología",
            catDemography: "Demografía",
            catHealth: "Salud",
        },
        end: {
            title: "No hay más datos por ahora",
            message:
                "Esta visualización se actualiza constantemente con nuevas métricas. Si quieres colaborar o sugerir datos, haz clic aquí.",
            linkText: "Colaborar en el proyecto",
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
