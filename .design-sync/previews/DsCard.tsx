import * as React from 'react';
import { useState } from 'react';
import { DsCard, DsStatusBadge, DsTypography, DsIcon, DsStack } from '@drivenets/design-system';

// Owned preview: two independent fixes layered on top of the generated preview.
//
// 1. The story meta sets `parameters.layout = 'centered'`, storybook's own built-in
//    decorator that wraps every story in a flex container
//    (`display:flex; align-items:center; justify-content:center; min-height:100vh`).
//    This converter has no mechanism for storybook's built-in `layout` parameter (only
//    custom decorators get bundled) — confirmed by grep over .ds-sync/lib, nothing
//    reads `parameters.layout`. `DsCard.Root`'s own CSS is `display:flex;
//    flex-direction:column` with only `min-width` set (no `width`), so as a plain
//    block-level child of the harness page it stretches to fill the full container
//    width (standard CSS: a block box with width:auto fills its containing block);
//    as a flex ITEM of storybook's centered wrapper it shrink-wraps to content/
//    min-width instead. Confirmed this is specific to DsCard within this batch:
//    DsModal/DsPopover/DsPanel also set `layout: 'centered'` but their trigger
//    content is naturally inline-sized, so the missing wrapper never surfaces for
//    them. The `Sizes` story is also unaffected because it wraps its three cards in
//    `DsStack` (itself a flex row), which turns each card into a flex item already.
//    Fixed by wrapping every single-card story's render in the same centering flex
//    container storybook uses.
// 2. `./ds-card.stories.module.scss` supplies several demo-only classes
//    (`.headerRow`, `.dataList`, `.footer`, `.collapsibleButton`, `.collapsibleIcon`,
//    `.collapseHeader`, `.collapseRoot`, `.collapsibleContent`,
//    `.collapsibleContentInner`) that resolve to `undefined` in the lightweight
//    story-preview pass (no Sass preprocessor) — confirmed visibly: the WithHeaderAndFooter/
//    StepCard header tint, StepCard's data-list grid layout, the Collapsible header
//    tint + chevron rotation, and the Collapsible card's max-width all disappeared.
//    `DsCard.Header`/`Body`/`Footer` forward both `className` and `style`
//    (`DsCardSlotProps extends HTMLAttributes<HTMLDivElement>`), so every class is
//    inlined below as a plain style object instead.

const centeredStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const headerRowStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	background: 'var(--color-dap-orange-200)',
};

const dataListStyle: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: '1fr auto',
	gap: 'var(--3xs) var(--sm)',
	width: '100%',
	borderTop: '1px solid var(--border-contrast)',
	paddingTop: 'var(--3xs)',
};

const footerStyle: React.CSSProperties = { borderTop: '1px solid var(--border-secondary)' };

const collapsibleButtonStyle: React.CSSProperties = { marginRight: 'var(--xs)' };

const collapseHeaderStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	background: 'var(--background-tertiary)',
};

const collapseRootStyle: React.CSSProperties = { maxWidth: '400px' };

const collapsibleContentStyle = (collapsed: boolean): React.CSSProperties => ({
	display: 'grid',
	gridTemplateRows: collapsed ? '0fr' : '1fr',
	transition: 'grid-template-rows, padding 200ms ease-in-out',
	...(collapsed ? { padding: 0 } : {}),
});

const collapsibleContentInnerStyle: React.CSSProperties = { overflow: 'hidden' };

const collapsibleIconStyle = (expanded: boolean): React.CSSProperties => ({
	transition: 'transform 150ms ease-in-out',
	transform: expanded ? 'rotate(180deg)' : undefined,
});

export const Default = () => (
	<div style={centeredStyle}>
		<DsCard.Root size="medium">
			<DsCard.Header>Card Title</DsCard.Header>
			<DsCard.Body>Card content goes here</DsCard.Body>
		</DsCard.Root>
	</div>
);

export const Small = () => (
	<div style={centeredStyle}>
		<DsCard.Root size="small">
			<DsCard.Header>Small Card</DsCard.Header>
			<DsCard.Body>Compact content area</DsCard.Body>
		</DsCard.Root>
	</div>
);

export const Large = () => (
	<div style={centeredStyle}>
		<DsCard.Root size="large">
			<DsCard.Header>Large Card</DsCard.Header>
			<DsCard.Body>Room for richer content and multiple sections</DsCard.Body>
		</DsCard.Root>
	</div>
);

export const Sizes = () => (
	<div style={centeredStyle}>
		<DsStack direction="row" gap="var(--lg)" alignItems="flex-start">
			<DsCard.Root size="small">
				<DsCard.Header>Small Card</DsCard.Header>
				<DsCard.Body>Small content</DsCard.Body>
			</DsCard.Root>

			<DsCard.Root size="medium">
				<DsCard.Header>Medium Card</DsCard.Header>
				<DsCard.Body>Medium content</DsCard.Body>
			</DsCard.Root>

			<DsCard.Root size="large">
				<DsCard.Header>Large Card</DsCard.Header>
				<DsCard.Body>Large content</DsCard.Body>
			</DsCard.Root>
		</DsStack>
	</div>
);

export const WithHeaderAndFooter = () => (
	<div style={centeredStyle}>
		<DsCard.Root size="large">
			<DsCard.Header style={headerRowStyle}>
				<DsTypography variant="heading3">Card Title</DsTypography>
				<DsStatusBadge icon="check_circle" status="active" ghost />
			</DsCard.Header>
			<DsCard.Body>
				<DsStack direction="column" gap="var(--3xs)">
					<DsTypography variant="body-md-bold">12 of 12 Devices</DsTypography>
					<DsTypography variant="body-sm-reg">Success 10 | Failed 1 | Skipped 1</DsTypography>
				</DsStack>
			</DsCard.Body>
			<DsCard.Footer style={footerStyle}>
				<DsTypography variant="body-sm-reg">Last updated: 2 min ago</DsTypography>
			</DsCard.Footer>
		</DsCard.Root>
	</div>
);

export const StepCard = () => (
	<div style={centeredStyle}>
		<DsCard.Root size="large">
			<DsCard.Header style={headerRowStyle}>
				<DsTypography variant="heading3">Canary</DsTypography>
				<DsStatusBadge icon="check_circle" status="active" label="Complete" />
			</DsCard.Header>
			<DsCard.Body>
				<DsStack direction="column" gap="var(--3xs)">
					<DsTypography variant="body-md-bold">12 of 12 Devices</DsTypography>
					<DsTypography variant="body-sm-reg" color="secondary">
						Success 10 | Failed 1 | Skipped 1
					</DsTypography>
				</DsStack>
			</DsCard.Body>
			<DsCard.Body style={dataListStyle}>
				<DsTypography variant="body-sm-reg">Config Push</DsTypography>
				<DsTypography variant="body-sm-reg" color="success">
					Complete
				</DsTypography>
				<DsTypography variant="body-sm-reg">Dwell Time (60 min.)</DsTypography>
				<DsTypography variant="body-sm-reg" color="success">
					Complete
				</DsTypography>
				<DsTypography variant="body-sm-reg">Failed</DsTypography>
				<DsTypography variant="body-sm-reg" color="secondary">
					1 (8%)
				</DsTypography>
				<DsTypography variant="body-sm-reg">Failure threshold</DsTypography>
				<DsTypography variant="body-sm-reg" color="secondary">
					5 or 10%
				</DsTypography>
				<DsTypography variant="body-sm-reg">Threshold state</DsTypography>
				<DsTypography variant="body-sm-reg" color="secondary">
					Normal
				</DsTypography>
			</DsCard.Body>
		</DsCard.Root>
	</div>
);

export const Selectable = () => (
	<div style={centeredStyle}>
		<DsCard.Root selectable selected={false}>
			<DsCard.Header>Selectable Card</DsCard.Header>
			<DsCard.Body>Click to select this card</DsCard.Body>
		</DsCard.Root>
	</div>
);

export const HighlightSelected = () => (
	<div style={centeredStyle}>
		<DsCard.Root selectable selected highlightSelected>
			<DsCard.Header>Highlighted Card</DsCard.Header>
			<DsCard.Body>This card has a highlighted background when selected</DsCard.Body>
		</DsCard.Root>
	</div>
);

export const SelectableControlled = () => {
	const [selected, setSelected] = useState(false);

	return (
		<div style={centeredStyle}>
			<DsCard.Root selectable selected={selected} onClick={() => setSelected(!selected)}>
				<DsCard.Header>Controlled Card</DsCard.Header>
				<DsCard.Body>{selected ? 'Selected! Click to deselect.' : 'Click to select.'}</DsCard.Body>
			</DsCard.Root>
		</div>
	);
};

export const Disabled = () => (
	<div style={centeredStyle}>
		<DsCard.Root selectable selected={false} disabled>
			<DsCard.Header>Unavailable step</DsCard.Header>
			<DsCard.Body>Cannot select this card.</DsCard.Body>
		</DsCard.Root>
	</div>
);

export const Collapsible = () => {
	const [expanded, setExpanded] = useState(true);

	return (
		<div style={centeredStyle}>
			<DsCard.Root size="large" style={collapseRootStyle}>
				<DsCard.Header style={collapseHeaderStyle}>
					<button
						type="button"
						style={collapsibleButtonStyle}
						onClick={() => setExpanded(!expanded)}
						aria-expanded={expanded}
					>
						<DsIcon icon="expand_more" style={collapsibleIconStyle(expanded)} data-expanded={expanded} />
					</button>
					<DsTypography variant="heading3">Collapsible Card</DsTypography>
				</DsCard.Header>
				<DsCard.Body style={collapsibleContentStyle(!expanded)} data-collapsed={!expanded}>
					<div style={collapsibleContentInnerStyle}>
						<DsTypography variant="body-md-reg">
							This content can be collapsed by clicking the header. The height animates smoothly using CSS
							Grid.
						</DsTypography>
					</div>
				</DsCard.Body>
			</DsCard.Root>
		</div>
	);
};
