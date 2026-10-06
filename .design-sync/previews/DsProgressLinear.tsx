import * as React from 'react';
import { useState } from 'react';
import { DsProgressLinear, DsStack, DsTypography } from '@drivenets/design-system';

// Owned preview: `Default` and `WithCustomCaption` render the bare component with no
// width wrapper. DsProgressLinear's root is `width: 100%` (ds-progress-linear.module.scss
// `.root`), and storybook's `layout: 'centered'` decorator puts `#storybook-root` — which
// has NO width of its own — directly inside a flex `<body>` (`align-items: center`, row
// direction, body's own width fixed by the viewport). A flex item with no explicit width
// shrink-wraps to its content's intrinsic size, and a percentage-width (100%) descendant
// can't contribute to that intrinsic-size calculation, so the whole bar collapses to the
// label/value text's natural width (verified via computed styles against the real
// sb-reference build: `#storybook-root` computes to ~126px, not the page's full width).
// The generated preview page mounts straight into a padded `<body>` div with no such flex
// shrink-wrap ancestor, so the same width:100% bar stretches to the full capture viewport
// instead. Reproduced below with the same two-level mechanism rather than a hardcoded
// pixel width: an outer flex row (stands in for `body`) wrapping an inner width-less div
// (stands in for `#storybook-root`) that directly parents the component — the inner div is
// the one that actually shrink-wraps; a percentage-width component nested any more deeply
// resolves its flex-basis directly off the already-sized flex container instead.

const shrinkWrapOuterStyle: React.CSSProperties = { display: 'flex', alignItems: 'center' };

export const Default = () => (
	<div style={shrinkWrapOuterStyle}>
		<div>
			<DsProgressLinear value={35} label="File Upload" caption="Uploading..." />
		</div>
	</div>
);

export const WithCustomCaption = () => (
	<div style={shrinkWrapOuterStyle}>
		<div>
			<DsProgressLinear
				value={60}
				label="Processing"
				caption={
					<DsTypography variant="body-sm-reg" color="secondary">
						Step 3 of 5
					</DsTypography>
				}
			/>
		</div>
	</div>
);

export const Controlled = () => {
	const [value, setValue] = useState(35);

	return (
		<DsStack direction="column" gap="var(--sm)" width="600px">
			<input
				type="range"
				min={0}
				max={100}
				value={value}
				onChange={(event) => setValue(Number(event.target.value))}
			/>
			<DsProgressLinear value={value} label="File Upload" caption="Uploading..." />
		</DsStack>
	);
};

export const AllVariants = () => (
	<DsStack direction="column" gap="var(--xl)" width="600px">
		<DsProgressLinear variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
		<DsProgressLinear variant="progress" value={35} label="File Upload" caption="Uploading..." />
		<DsProgressLinear variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
		<DsProgressLinear variant="success" value={100} label="File Upload" caption="Upload complete." />
		<DsProgressLinear
			variant="error"
			value={0}
			label="File Upload"
			caption="Error: File exceeds size limit."
		/>
	</DsStack>
);

export const Sizes = () => (
	<DsStack direction="column" gap="var(--xl)" width="600px">
		<DsStack direction="column" gap="var(--2xs)">
			<DsTypography variant="body-sm-md" color="secondary">
				Small
			</DsTypography>
			<DsProgressLinear size="small" value={50} label="File Upload" caption="Uploading..." />
		</DsStack>
		<DsStack direction="column" gap="var(--2xs)">
			<DsTypography variant="body-sm-md" color="secondary">
				Medium
			</DsTypography>
			<DsProgressLinear size="medium" value={50} label="File Upload" caption="Uploading..." />
		</DsStack>
		<DsStack direction="column" gap="var(--2xs)">
			<DsTypography variant="body-sm-md" color="secondary">
				Large
			</DsTypography>
			<DsProgressLinear size="large" value={50} label="File Upload" caption="Uploading..." />
		</DsStack>
	</DsStack>
);

export const FullMatrix = () => (
	<DsStack direction="column" gap="var(--2xl)" width="600px">
		<DsStack direction="column" gap="var(--sm)">
			<DsTypography variant="body-sm-semi-bold">Small</DsTypography>
			<DsProgressLinear
				size="small"
				variant="initial"
				value={0}
				label="File Upload"
				caption="Waiting to start..."
			/>
			<DsProgressLinear
				size="small"
				variant="progress"
				value={35}
				label="File Upload"
				caption="Uploading..."
			/>
			<DsProgressLinear
				size="small"
				variant="interrupted"
				value={35}
				label="File Upload"
				caption="Upload interrupted."
			/>
			<DsProgressLinear
				size="small"
				variant="success"
				value={100}
				label="File Upload"
				caption="Upload complete."
			/>
			<DsProgressLinear
				size="small"
				variant="error"
				value={0}
				label="File Upload"
				caption="Error: File exceeds size limit."
			/>
		</DsStack>
		<DsStack direction="column" gap="var(--sm)">
			<DsTypography variant="body-sm-semi-bold">Medium</DsTypography>
			<DsProgressLinear
				size="medium"
				variant="initial"
				value={0}
				label="File Upload"
				caption="Waiting to start..."
			/>
			<DsProgressLinear
				size="medium"
				variant="progress"
				value={35}
				label="File Upload"
				caption="Uploading..."
			/>
			<DsProgressLinear
				size="medium"
				variant="interrupted"
				value={35}
				label="File Upload"
				caption="Upload interrupted."
			/>
			<DsProgressLinear
				size="medium"
				variant="success"
				value={100}
				label="File Upload"
				caption="Upload complete."
			/>
			<DsProgressLinear
				size="medium"
				variant="error"
				value={0}
				label="File Upload"
				caption="Error: File exceeds size limit."
			/>
		</DsStack>
		<DsStack direction="column" gap="var(--sm)">
			<DsTypography variant="body-sm-semi-bold">Large</DsTypography>
			<DsProgressLinear
				size="large"
				variant="initial"
				value={0}
				label="File Upload"
				caption="Waiting to start..."
			/>
			<DsProgressLinear
				size="large"
				variant="progress"
				value={35}
				label="File Upload"
				caption="Uploading..."
			/>
			<DsProgressLinear
				size="large"
				variant="interrupted"
				value={35}
				label="File Upload"
				caption="Upload interrupted."
			/>
			<DsProgressLinear
				size="large"
				variant="success"
				value={100}
				label="File Upload"
				caption="Upload complete."
			/>
			<DsProgressLinear
				size="large"
				variant="error"
				value={0}
				label="File Upload"
				caption="Error: File exceeds size limit."
			/>
		</DsStack>
	</DsStack>
);
