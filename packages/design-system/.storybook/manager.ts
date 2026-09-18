import { addons } from 'storybook/manager-api';
import { registerStoryChunkReload } from './chunk-reload';
import { darkTheme } from './themes';

void addons.ready().then((channel) => {
	registerStoryChunkReload({ channel });
});

addons.setConfig({ theme: darkTheme });
