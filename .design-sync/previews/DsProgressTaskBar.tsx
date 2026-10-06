import * as React from 'react';
import { DsProgressTaskBar } from '@drivenets/design-system';

// Owned preview: the story file applies a global decorator wrapping every story in
// `<div className={styles.wrapper}>` from './ds-progress-task-bar.stories.module.scss'
// (`.wrapper { width: 220px }`). Story-local .scss can't compile in the lightweight
// story-preview pass (no Sass preprocessor), so it resolves to `{}` — the className is
// undefined and the bar stretches to the full page width instead of the storybook's
// 220px-constrained demo width. Reimplemented here with the same width inlined as a
// plain style object so the bar is sized exactly like the storybook render.

const wrapperStyle: React.CSSProperties = { width: 220 };

const Wrapper = ({ children }: { children: React.ReactNode }) => <div style={wrapperStyle}>{children}</div>;

export const Default = () => (
	<Wrapper>
		<DsProgressTaskBar completed={300} running={100} failed={100} total={1000} />
	</Wrapper>
);

export const Zero = () => (
	<Wrapper>
		<DsProgressTaskBar completed={0} running={0} failed={0} total={999} />
	</Wrapper>
);

export const RunningOnly = () => (
	<Wrapper>
		<DsProgressTaskBar running={300} total={1000} />
	</Wrapper>
);

export const CompletedAndFailed = () => (
	<Wrapper>
		<DsProgressTaskBar completed={300} failed={100} total={1000} />
	</Wrapper>
);

export const AllStatuses = () => (
	<Wrapper>
		<DsProgressTaskBar completed={300} running={100} failed={100} total={1000} />
	</Wrapper>
);

export const FullyDone = () => (
	<Wrapper>
		<DsProgressTaskBar completed={1000} total={1000} />
	</Wrapper>
);

export const MinWidth = () => (
	<Wrapper>
		<DsProgressTaskBar running={3} total={999} />
	</Wrapper>
);

export const AbbreviatedValues = () => (
	<Wrapper>
		<DsProgressTaskBar completed={1_000_000} running={125_000} failed={9_500} total={1_400_000} />
	</Wrapper>
);

/** Status tooltips and the total label are overridable through `locale`. */
export const Localized = () => (
	<Wrapper>
		<DsProgressTaskBar
			completed={300}
			running={100}
			failed={100}
			total={1000}
			locale={{
				// cspell:disable-next-line
				completed: 'Terminé',
				// cspell:disable-next-line
				running: 'En cours',
				// cspell:disable-next-line
				failed: 'Échoué',
				total: (value) => `sur ${value}`,
			}}
		/>
	</Wrapper>
);
