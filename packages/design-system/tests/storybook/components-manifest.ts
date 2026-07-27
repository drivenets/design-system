import { getStorybookUrl } from './storybook-url';

export interface ManifestStory {
	id: string;
	name: string;
	snippet?: string;
	description?: string;
}

export interface ManifestComponent {
	id: string;
	name: string;
	path: string;
	stories?: ManifestStory[];
}

interface ComponentsManifest {
	components: Record<string, ManifestComponent>;
}

let manifestPromise: Promise<ComponentsManifest> | undefined;

async function fetchManifest(): Promise<ComponentsManifest> {
	const storybookUrl = getStorybookUrl();
	const response = await fetch(`${storybookUrl}/manifests/components.json`);

	if (!response.ok) {
		throw new Error(`Failed to fetch components manifest (${String(response.status)}) from ${storybookUrl}`);
	}

	return (await response.json()) as ComponentsManifest;
}

async function getManifest(): Promise<ComponentsManifest> {
	manifestPromise ??= fetchManifest();

	return manifestPromise;
}

/**
 * Resolves a manifest component from a kebab folder suffix (e.g. `button-v3` → `ds-button-v3`).
 * Matches by `path` because the manifest id is derived from the story title via Storybook's
 * `toId` (`Components/ButtonV3` → `components-buttonv3`), which is not recoverable from the folder.
 */
export async function resolveComponent(name: string): Promise<ManifestComponent> {
	const manifest = await getManifest();
	const folder = `ds-${name}`;
	const component = Object.values(manifest.components).find((entry) => entry.path.includes(`/${folder}/`));

	if (!component) {
		throw new Error(`No manifest component found for folder "${folder}"`);
	}

	return component;
}

export async function getStorySnippet(componentId: string, storyName: string): Promise<string> {
	const manifest = await getManifest();
	const component = manifest.components[componentId];

	if (!component) {
		throw new Error(`Component "${componentId}" not found in components manifest`);
	}

	const story = component.stories?.find((entry) => entry.name === storyName);

	if (!story?.snippet?.trim()) {
		throw new Error(`Manifest snippet not found for "${componentId}" story "${storyName}"`);
	}

	return story.snippet.trim();
}
