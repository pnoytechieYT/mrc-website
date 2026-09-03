// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "http://pnoytechieyt.github.io/mrc-website/",
	vite: {
		plugins: [tailwindcss()],
	},
});
