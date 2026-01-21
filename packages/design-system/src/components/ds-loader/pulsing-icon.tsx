import styles from './ds-loader.module.scss';

interface PulsingIconProps {
	className?: string;
}

const PulsingIcon = ({ className }: PulsingIconProps) => (
	<svg
		className={className}
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle className={styles.pulsingOuter} cx="12" cy="12" r="8" fill="#5452F6" />
		<circle cx="12" cy="12" r="5.5" fill="#5452F6" />
	</svg>
);

export default PulsingIcon;
