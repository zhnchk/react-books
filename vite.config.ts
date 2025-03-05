import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@/components': path.resolve(__dirname, 'src/components'),
			'@/pages': path.resolve(__dirname, 'src/pages'),
			'@/data': path.resolve(__dirname, 'src/data'),
			'@/types': path.resolve(__dirname, 'src/types'),
			'@/hooks': path.resolve(__dirname, 'src/hooks'),
			'@/utils': path.resolve(__dirname, 'src/utils'),
		},
	},
	plugins: [react()],
});
