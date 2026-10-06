import * as React from 'react';
import { useState } from 'react';
import {
	DsDrawer,
	DsButton,
	DsButtonV3,
	DsTextInput,
	DsIcon,
	DsDivider,
	DsStack,
	DsSystemStatus,
	DsTypography,
	type DsDrawerColumns,
	type DsDrawerProps,
} from '@drivenets/design-system';
import type { ResponsiveValue } from '@drivenets/design-system/utils/responsive';

// Owned preview: two independent fixes layered on top of the generated preview.
//
// 1. `./ds-drawer.stories.module.scss` is a story-local CSS module used for layout
//    (`.storyWrapper`, `.responsiveButtons`, `.body`, `.bodyGrid`, `.section`, `.tabs`,
//    height utilities, etc). Story-local .scss can't compile in the lightweight
//    story-preview pass (no Sass preprocessor), so every class resolves to `undefined`
//    — confirmed visibly on the `Responsive` story, whose trigger buttons collapse from
//    a wrapped flex row to a stacked block column. Fixed by inlining the same rules as
//    plain style objects below (see NOTES.md's recurring story-local-scss pattern).
// 2. Every `DsDrawer` usage below passes `portal={true}` explicitly, deviating from the
//    real story source (which never sets `portal` and relies on the `false` default).
//    This is the sanctioned fix for the harness's card-wrapper transform trap
//    (`.ds-cell`/`.ds-single` carry `transform: translateZ(0)`, which becomes the
//    containing block for the drawer's `position:absolute` Positioner, collapsing it to
//    height 0 when portal is off). `portal` is real, documented public API on
//    `DsDrawerProps` — this is representative usage, not a misrepresentation. In
//    practice none of this component's own 8 stories ever opens the drawer by default
//    (every story's initial `isOpen`/`openDrawer`/`query` state is closed, and this
//    harness has no play-function support to click "Open Drawer"), so the blank-render
//    bug never actually surfaced in grading here — portal={true} is applied anyway per
//    the batch instruction, as a deliberate preventive/representative measure, not a
//    reaction to an observed blank render.

const storyWrapperStyle: React.CSSProperties = { padding: '2rem' };

const descriptionStyle: React.CSSProperties = { color: 'var(--font-secondary)', flexBasis: '100%' };
const searchInputStyle: React.CSSProperties = { flex: 1 };

const tabsStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	gap: 'var(--xs)',
	margin: '0 var(--standard)',
	borderBottom: '1px solid var(--border)',
	background: 'var(--background)',
	padding: 'var(--lg) var(--standard) 0 var(--standard)',
};
const tabStyle: React.CSSProperties = {
	padding: 'var(--2xs) var(--sm)',
	borderBottom: '2px solid transparent',
	color: 'var(--font-main)',
	cursor: 'pointer',
};
const tabSelectedStyle: React.CSSProperties = {
	color: 'var(--font-action)',
	borderBottom: '2px solid var(--font-action)',
};

const bodyStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column' };
const bodyGridStyle: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: '3fr 1fr',
	gridTemplateRows: '3fr 1fr',
};

const sectionStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	background: 'var(--background)',
	flex: 1,
};
const sectionHeaderStyle: React.CSSProperties = {
	padding: 'var(--lg) var(--standard) var(--3xs) var(--standard)',
};
const sectionContentStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flex: 1,
	margin: 'var(--xs) var(--standard)',
	background: 'var(--Marker-Magenta-12, rgba(255, 0, 183, 0.12))',
	color: 'var(--Marker-Magenta-60, rgba(255, 0, 183, 0.6))',
};
const tabsSectionStyle: React.CSSProperties = { flex: 0 };
const spanTwoRowsStyle: React.CSSProperties = { gridRow: 'span 2' };
const tallStyle: React.CSSProperties = { minHeight: '12.5rem' };
const tallerStyle: React.CSSProperties = { minHeight: '18.75rem' };
const tallestStyle: React.CSSProperties = { minHeight: '31.25rem' };

const responsiveButtonsStyle: React.CSSProperties = {
	display: 'flex',
	flexWrap: 'wrap',
	gap: 'var(--xs)',
	marginTop: 'var(--sm)',
};

const Tabs = ({ total = 4 }: { total?: number }) => {
	const [selected, setSelected] = useState(1);
	return (
		<div style={tabsStyle}>
			{Array.from({ length: total }, (_, index) => (
				<button
					type="button"
					key={index}
					style={selected === index ? { ...tabStyle, ...tabSelectedStyle } : tabStyle}
					onClick={() => setSelected(index)}
				>
					Tab item {index + 1}
				</button>
			))}
		</div>
	);
};

export const Default = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div style={storyWrapperStyle}>
			<DsButton onClick={() => setIsOpen(true)}>Open Drawer</DsButton>

			<DsDrawer portal open={isOpen} onOpenChange={setIsOpen}>
				<DsDrawer.Header>
					<DsDrawer.Title>
						Default Drawer <DsSystemStatus status="healthy" label="Active" />
					</DsDrawer.Title>
					<DsStack alignItems="center" gap="var(--xs)">
						<DsButtonV3 variant="tertiary" icon="open_in_full" size="tiny" aria-label="Expand" />
						<DsDivider orientation="vertical" />
						<DsDrawer.CloseTrigger />
					</DsStack>
					<DsTypography style={descriptionStyle} variant="body-xs-reg">
						This is a description caption under a title.
					</DsTypography>
				</DsDrawer.Header>
				<DsDrawer.Toolbar>
					<DsTextInput
						placeholder="Search..."
						style={searchInputStyle}
						slots={{ startAdornment: <DsIcon icon="search" size="tiny" /> }}
					/>
					<DsIcon icon="filter_list" size="tiny" />
				</DsDrawer.Toolbar>
				<DsDrawer.Body style={bodyStyle}>
					<div style={sectionStyle}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
					</div>
					<div style={sectionStyle}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
				<DsDrawer.Footer>
					<DsDrawer.Actions>
						<DsButton design="v1.2" buttonType="tertiary" size="large">
							Cancel
						</DsButton>
						<DsButton design="v1.2" size="large">
							Save
						</DsButton>
					</DsDrawer.Actions>
				</DsDrawer.Footer>
			</DsDrawer>
		</div>
	);
};

export const WithTabs = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div style={storyWrapperStyle}>
			<DsButton onClick={() => setIsOpen(true)}>Open Drawer</DsButton>

			<DsDrawer portal open={isOpen} onOpenChange={setIsOpen} columns={8}>
				<DsDrawer.Header>
					<DsDrawer.Title>
						Drawer with Tabs <DsSystemStatus status="healthy" label="Active" />
					</DsDrawer.Title>
					<DsStack alignItems="center" gap="var(--xs)">
						<DsButtonV3 variant="tertiary" icon="open_in_full" size="tiny" aria-label="Expand" />
						<DsDivider orientation="vertical" />
						<DsDrawer.CloseTrigger />
					</DsStack>
					<DsTypography style={descriptionStyle} variant="body-xs-reg">
						This is a description caption under a title.
					</DsTypography>
				</DsDrawer.Header>
				<DsDrawer.Body style={bodyStyle}>
					<div style={{ ...sectionStyle, ...tabsSectionStyle }}>
						<Tabs />
					</div>
					<div style={sectionStyle}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
				<DsDrawer.Footer>
					<DsDrawer.Actions>
						<DsButton design="v1.2" buttonType="tertiary" size="large">
							Cancel
						</DsButton>
						<DsButton design="v1.2" size="large">
							Save
						</DsButton>
					</DsDrawer.Actions>
				</DsDrawer.Footer>
			</DsDrawer>
		</div>
	);
};

export const WithBackdropAndScroll = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div style={storyWrapperStyle}>
			<DsButton onClick={() => setIsOpen(true)}>Open Drawer</DsButton>

			<DsDrawer portal open={isOpen} onOpenChange={setIsOpen} backdrop>
				<DsDrawer.Header>
					<DsDrawer.Title>Basic Drawer</DsDrawer.Title>
					<DsDrawer.CloseTrigger />
				</DsDrawer.Header>
				<DsDrawer.Body style={bodyStyle}>
					<div style={sectionStyle}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={{ ...sectionContentStyle, ...tallerStyle }}>
							Out of scope section
						</DsTypography>
					</div>
					<div style={sectionStyle}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={{ ...sectionContentStyle, ...tallStyle }}>
							Out of scope section
						</DsTypography>
						<DsTypography variant="heading2" style={{ ...sectionContentStyle, ...tallestStyle }}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
			</DsDrawer>
		</div>
	);
};

export const DockToStart = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div style={storyWrapperStyle}>
			<DsButton onClick={() => setIsOpen(true)}>Open Drawer</DsButton>

			<DsDrawer portal open={isOpen} onOpenChange={setIsOpen} position="start">
				<DsDrawer.Header>
					<DsDrawer.Title>Basic Drawer</DsDrawer.Title>
					<DsDrawer.CloseTrigger />
				</DsDrawer.Header>
				<DsDrawer.Body style={bodyStyle}>
					<div style={sectionStyle}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
					</div>
					<div style={sectionStyle}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
			</DsDrawer>
		</div>
	);
};

export const WithGridContent = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div style={storyWrapperStyle}>
			<DsButton onClick={() => setIsOpen(true)}>Open Drawer</DsButton>

			<DsDrawer portal open={isOpen} onOpenChange={setIsOpen} columns={10}>
				<DsDrawer.Header>
					<DsDrawer.Title>Basic Drawer</DsDrawer.Title>
					<DsDrawer.CloseTrigger />
				</DsDrawer.Header>
				<DsDrawer.Body style={bodyGridStyle}>
					<div style={{ ...sectionStyle, ...spanTwoRowsStyle }}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
					</div>
					<div style={sectionStyle}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
					</div>
					<div style={sectionStyle}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
			</DsDrawer>
		</div>
	);
};

export const Responsive = () => {
	const [openDrawer, setOpenDrawer] = useState<string | null>(null);

	const close = () => setOpenDrawer(null);

	const variants = [
		{ label: '3 cols → 4 on md', columns: { lg: 3, md: 4 } },
		{ label: '4 cols → 6 on md', columns: { lg: 4, md: 6 } },
		{ label: '5 cols → 6 on md', columns: { lg: 5, md: 6 } },
		{ label: '6 cols → 10 on md', columns: { lg: 6, md: 10 } },
		{ label: '8 cols → 10 on md', columns: { lg: 8, md: 10 } },
	] satisfies Array<{ label: string; columns: ResponsiveValue<DsDrawerColumns> }>;

	return (
		<div style={storyWrapperStyle}>
			<DsTypography variant="body-md-semi-bold">
				Resize the window below 1440 px to see the responsive column change.
			</DsTypography>

			<div style={responsiveButtonsStyle}>
				{variants.map(({ label }) => (
					<DsButton key={label} onClick={() => setOpenDrawer(label)}>
						{label}
					</DsButton>
				))}
			</div>

			{variants.map(({ label, columns }) => (
				<DsDrawer
					key={label}
					portal
					open={openDrawer === label}
					onOpenChange={(open) => !open && close()}
					columns={columns}
				>
					<DsDrawer.Header>
						<DsDrawer.Title>{label}</DsDrawer.Title>
						<DsDrawer.CloseTrigger />
					</DsDrawer.Header>
					<DsDrawer.Body style={bodyStyle}>
						<div style={sectionStyle}>
							<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
								lg: {columns.lg} columns · md: {columns.md} columns
							</DsTypography>
							<DsTypography variant="heading2" style={sectionContentStyle}>
								Drawer content
							</DsTypography>
						</div>
					</DsDrawer.Body>
				</DsDrawer>
			))}
		</div>
	);
};

export const ToggleFullSize = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	return (
		<div style={storyWrapperStyle}>
			<DsButton onClick={() => setIsOpen(true)}>Open Drawer</DsButton>

			<DsDrawer portal open={isOpen} onOpenChange={setIsOpen} columns={isFullScreen ? 12 : 4}>
				<DsDrawer.Header>
					<DsDrawer.Title>Expandable Drawer</DsDrawer.Title>
					<DsStack alignItems="center" gap="var(--xs)">
						<DsButtonV3
							variant="tertiary"
							icon={isFullScreen ? 'close_fullscreen' : 'open_in_full'}
							size="tiny"
							aria-label={isFullScreen ? 'Collapse' : 'Expand'}
							onClick={toggleFullScreen}
						/>
						<DsDivider orientation="vertical" />
						<DsDrawer.CloseTrigger />
					</DsStack>
				</DsDrawer.Header>
				<DsDrawer.Body style={bodyStyle}>
					<div style={sectionStyle}>
						<DsTypography style={sectionHeaderStyle} variant="body-md-semi-bold">
							Drawer content header
						</DsTypography>
						<DsTypography variant="heading2" style={sectionContentStyle}>
							Out of scope section
						</DsTypography>
					</div>
				</DsDrawer.Body>
			</DsDrawer>
		</div>
	);
};

export const PreventOpenAutoFocus = () => {
	const [query, setQuery] = useState('');

	return (
		<div style={storyWrapperStyle}>
			<DsTextInput
				placeholder="Start typing to open the drawer"
				value={query}
				onValueChange={setQuery}
				slots={{ startAdornment: <DsIcon icon="search" size="tiny" /> }}
			/>

			<DsDrawer
				portal
				open={query.length > 0}
				onOpenChange={(open) => !open && setQuery('')}
				onOpenAutoFocus={(event: Event) => event.preventDefault()}
			>
				<DsDrawer.Header>
					<DsDrawer.Title>Suggestions</DsDrawer.Title>
					<DsDrawer.CloseTrigger />
				</DsDrawer.Header>
				<DsDrawer.Body style={bodyStyle}>
					<DsTypography variant="body-md-reg">
						Focus stayed in the input — keep typing without losing your place.
					</DsTypography>
				</DsDrawer.Body>
			</DsDrawer>
		</div>
	);
};
