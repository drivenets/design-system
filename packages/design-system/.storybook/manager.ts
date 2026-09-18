import { addons } from 'storybook/manager-api';
import { registerStoryChunkReload } from './chunk-reload';
import { darkTheme } from './themes';

if (import.meta.env.PROD) {
	registerStoryChunkReload();
}

addons.setConfig({ theme: darkTheme });
