interface SpinnerIconProps {
	className?: string;
}

const SpinnerIcon = ({ className }: SpinnerIconProps) => (
	<svg
		className={className}
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<mask id="path-2-inside-1_14836_15182" fill="white">
			<path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" />
		</mask>
		<g clipPath="url(#paint0_angular_14836_15182_clip_path)" mask="url(#path-2-inside-1_14836_15182)">
			<g transform="matrix(-0.008 0 0 0.008 12 12)">
				<foreignObject x="-1375" y="-1375" width="2750" height="2750">
					<div
						style={{
							background:
								'conic-gradient(from 90deg, rgba(65, 146, 246, 1) 0deg, rgba(65, 146, 246, 0) 360deg)',
							height: '100%',
							width: '100%',
							opacity: 1,
						}}
					/>
				</foreignObject>
			</g>
		</g>
		<path
			d="M12 4L12 7C9.23858 7 7 9.23858 7 12L4 12L1 12C1 5.92487 5.92487 1 12 1L12 4ZM4 12L7 12C7 14.7614 9.23858 17 12 17L12 20L12 23C5.92487 23 1 18.0751 1 12L4 12ZM12 20L12 17C14.7614 17 17 14.7614 17 12L20 12L23 12C23 18.0751 18.0751 23 12 23L12 20ZM20 12L17 12C17 9.23858 14.7614 7 12 7L12 4L12 1C18.0751 1 23 5.92487 23 12L20 12Z"
			mask="url(#path-2-inside-1_14836_15182)"
		/>
		<defs>
			<clipPath id="paint0_angular_14836_15182_clip_path">
				<path
					d="M12 4L12 7C9.23858 7 7 9.23858 7 12L4 12L1 12C1 5.92487 5.92487 1 12 1L12 4ZM4 12L7 12C7 14.7614 9.23858 17 12 17L12 20L12 23C5.92487 23 1 18.0751 1 12L4 12ZM12 20L12 17C14.7614 17 17 14.7614 17 12L20 12L23 12C23 18.0751 18.0751 23 12 23L12 20ZM20 12L17 12C17 9.23858 14.7614 7 12 7L12 4L12 1C18.0751 1 23 5.92487 23 12L20 12Z"
					mask="url(#path-2-inside-1_14836_15182)"
				/>
			</clipPath>
		</defs>
	</svg>
);

export default SpinnerIcon;
