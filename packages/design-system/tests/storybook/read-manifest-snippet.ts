import { getStorybookUrl } from './storybook-url';

interface ManifestStory {
	name: string;
	snippet?: string;
}

interface ComponentsManifest {
	components: Record<
		string,
		{
			stories?: ManifestStory[];
		}
	>;
}

export async function readManifestSnippet(componentId: string, storyName: string): Promise<string> {
	const storybookUrl = getStorybookUrl();
	const response = await fetch(`${storybookUrl}/manifests/components.json`);

	if (!response.ok) {
		throw new Error(`Failed to fetch components manifest (${String(response.status)}) from ${storybookUrl}`);
	}

	const manifest = (await response.json()) as ComponentsManifest;
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
