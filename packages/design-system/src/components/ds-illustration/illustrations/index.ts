import type { FC, SVGProps } from 'react';
import type { DsIllustrationVariant } from '../ds-illustration.types';
import { ConfigurationIllustration } from './configuration';
import { DeviceIllustration } from './device';
import { DoneIllustration } from './done';
import { EmptyInboxIllustration } from './empty-inbox';
import { ErrorIllustration } from './error';
import { GoFilterIllustration } from './go-filter';
import { NoConnectionIllustration } from './no-connection';
import { NoCreditCardIllustration } from './no-credit-card';
import { NoDeviceIllustration } from './no-device';
import { NoDocumentsIllustration } from './no-documents';
import { NoGpsIllustration } from './no-gps';
import { NoImagesIllustration } from './no-images';
import { NoItemsCartIllustration } from './no-items-cart';
import { NoMessagesIllustration } from './no-messages';
import { NoSearchResultIllustration } from './no-search-result';
import { NoTasksIllustration } from './no-tasks';
import { SiteIllustration } from './site';

export const illustrations: Record<DsIllustrationVariant, FC<SVGProps<SVGSVGElement>>> = Object.freeze({
	configuration: ConfigurationIllustration,
	device: DeviceIllustration,
	done: DoneIllustration,
	'empty-inbox': EmptyInboxIllustration,
	error: ErrorIllustration,
	'go-filter': GoFilterIllustration,
	'no-connection': NoConnectionIllustration,
	'no-credit-card': NoCreditCardIllustration,
	'no-device': NoDeviceIllustration,
	'no-documents': NoDocumentsIllustration,
	'no-gps': NoGpsIllustration,
	'no-images': NoImagesIllustration,
	'no-items-cart': NoItemsCartIllustration,
	'no-messages': NoMessagesIllustration,
	'no-search-result': NoSearchResultIllustration,
	'no-tasks': NoTasksIllustration,
	site: SiteIllustration,
});
