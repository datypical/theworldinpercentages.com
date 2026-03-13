/// <reference types="@cloudflare/workers-types" />

declare global {
    namespace App {
        interface Platform {
            env: {
                percentage_db: D1Database;
            };
            context: {
                waitUntil(promise: Promise<unknown>): void;
            };
            caches: CacheStorage & { default: Cache };
        }
    }
}

export {};
