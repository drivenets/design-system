import { DsButtonLegacy } from './versions/ds-button-legacy';
import { DsButtonNew } from './versions/ds-button-new';
import type { DsButtonUnifiedProps } from './ds-button.types';

const DsButton = (props: DsButtonUnifiedProps) => {
	if (props.design === 'v1.2') {
		return <DsButtonNew {...props} />;
	}
	return <DsButtonLegacy {...props} />;
};

export default DsButton;
