import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ command }) => {
	const config = {
		plugins: [react()],
		base: '/',
		test: {
			environment: 'jsdom',
			css: true
		}
	};

	if (command !== 'serve') {
		config.base = './';
	}

	return config;
});
