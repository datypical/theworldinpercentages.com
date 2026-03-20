import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
    suggest: async ({ request, platform }) => {
        const data = await request.formData();
        const question = data.get("question")?.toString();
        const percentage = data.get("percentage")?.toString();
        const sourceUrl = data.get("sourceUrl")?.toString();

        if (!question || !percentage) {
            return fail(400, {
                missing: true,
                error: "Question and percentage are required.",
            });
        }

        const db = platform?.env?.percentage_db;

        if (!db) {
            console.error(
                "Error: Could not connect to the database. 'percentage_db' is missing from the environment variables.",
            );
            return fail(500, { error: "Database not connected." });
        }

        try {
            await db
                .prepare(
                    "INSERT INTO sub_missions (question, percentage, source_url) VALUES (?1, ?2, ?3)",
                )
                .bind(question, percentage, sourceUrl || "")
                .run();

            return { success: true };
        } catch (e) {
            console.error("Database error:", e);
            return fail(500, { error: "Failed to save submission." });
        }
    },
} satisfies Actions;
