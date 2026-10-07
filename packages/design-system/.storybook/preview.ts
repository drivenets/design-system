import type { Preview } from '@storybook/react-vite';
import { addons } from 'storybook/preview-api';
import '../src/styles/styles.scss';
import { registerStoryChunkReload } from './chunk-reload';
import { lightTheme } from './themes';

if (import.meta.env.PROD) {
	void addons.ready().then((channel) => {
		registerStoryChunkReload({ channel });
	});
}

const preview: Preview = {
	tags: ['autodocs'],
	parameters: {
		// Render function props (e.g. onClick spies) as a stable placeholder in
		// Autodocs "Show code". Avoids leaking minified names/spy internals that
		// vary per production build.
		jsx: {
			functionValue: () => '() => {}',
		},
		docs: {
			theme: lightTheme,
		},
		options: {
			storySort: {
				order: [
					'Overview',
					'Guidelines',
					['Colors', 'Typography', 'Layouts', 'Forms', 'Token Migration'],
					'Components',
					'*',
				],
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo',
		},
	},
};

export default preview;
