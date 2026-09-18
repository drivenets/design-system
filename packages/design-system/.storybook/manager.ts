import { addons } from 'storybook/manager-api';
import { registerStoryChunkReload } from './chunk-reload';
import { darkTheme } from './themes';

// Manager is esbuild IIFE, not Vite — import.meta.env.PROD is not defined here.
if (process.env.NODE_ENV === 'production') {
	void addons.ready().then((channel) => {
		registerStoryChunkReload({ channel });
	});
}

addons.setConfig({ theme: darkTheme });
