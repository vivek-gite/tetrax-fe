import { execSync } from "node:child_process";

import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

const commitHash = execSync("git rev-parse --short HEAD").toString().trim();

export default defineConfig({
	define: {
		__APP_VERSION__: JSON.stringify("1.0-" + commitHash),
	},

	plugins: [sveltekit()],

	server: {
		proxy: {
			"/api": {
				target: "http://0.0.0.0:8000",
				changeOrigin: true,
				ws: true,
			},
		},
	},
});
