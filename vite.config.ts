import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit({
      preprocess: vitePreprocess(),
      compilerOptions: { runes: true },
      adapter: adapter(),
    }),
  ],
});
