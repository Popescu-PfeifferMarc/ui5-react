import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		devSourcemap: true,
		modules: {
			scopeBehaviour: 'local',
			localsConvention: 'camelCase',
		},
	},
	server: {
		proxy: {
			'/mis': {
				target: 'https://dev.upgana.only.sap/mis',
				auth: 'mis:mis',
				secure: false,
			},
		},
	},
});
