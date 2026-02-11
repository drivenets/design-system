import type { FC, SVGProps } from 'react';

// Site & Location icons
import { SpecialMarket } from './special-market';
import { SpecialSiteT1 } from './special-site-t1';
import { SpecialSiteT2 } from './special-site-t2';
import { SpecialSiteT3 } from './special-site-t3';
import { SpecialSiteT4 } from './special-site-t4';
import { SpecialSiteUnknown } from './special-site-unknown';
import { SpecialSiteGeneric } from './special-site-generic';

// NE State icons
import { SpecialDiscoveredNe } from './special-discovered-ne';
import { SpecialUpgrading } from './special-upgrading';
import { SpecialClusterNe } from './special-cluster-ne';
import { SpecialStandalone } from './special-standalone';

// NE Navigation icons
import { SpecialNeNav360Dashboard } from './special-ne-nav-360-dashboard';
import { SpecialNeNavComponents } from './special-ne-nav-components';
import { SpecialNeNavTopology } from './special-ne-nav-topology';
import { SpecialNeNavStacks } from './special-ne-nav-stacks';
import { SpecialNeNavSettings } from './special-ne-nav-settings';
import { SpecialNeNavMessageSupport } from './special-ne-nav-message-support';
import { SpecialNeNavLogging } from './special-ne-nav-logging';
import { SpecialNeNavTerminal } from './special-ne-nav-terminal';
import { SpecialNeNavInstallLog } from './special-ne-nav-install-log';

// System & Config icons
import { SpecialAutobootProfiles } from './special-autoboot-profiles';
import { SpecialAutomation } from './special-automation';
import { SpecialStacks } from './special-stacks';
import { SpecialPackages } from './special-packages';
import { SpecialGnmi } from './special-gnmi';
import { SpecialAlarmSettings } from './special-alarm-settings';
import { SpecialNeHealth } from './special-ne-health';
import { SpecialHardware } from './special-hardware';
import { SpecialModules } from './special-modules';
import { SpecialResources } from './special-resources';
import { SpecialVersionControl } from './special-version-control';
import { SpecialSoftware } from './special-software';
import { SpecialConflictedNes } from './special-conflicted-nes';
import { SpecialYangVersionControl } from './special-yang-version-control';
import { SpecialOldBaseOs } from './special-old-base-os';
import { SpecialGeneralDetails } from './special-general-details';
import { SpecialConfigTemplate } from './special-config-template';
import { SpecialCompare } from './special-compare';
import { SpecialWebhook } from './special-webhook';
import { SpecialMapView } from './special-map-view';

// Misc icons
import { SpecialHome } from './special-home';
import { SpecialLego } from './special-lego';
import { SpecialScheme } from './special-scheme';
import { SpecialBook } from './special-book';
import { SpecialDevice } from './special-device';
import { SpecialGroupedDevices } from './special-grouped-devices';
import { SpecialFiberCircuit } from './special-fiber-circuit';
import { SpecialNetgen } from './special-netgen';
import { SpecialNetgenS } from './special-netgen-s';

// Active state icons
import { SpecialFilterListActive } from './special-filter-list-active';
import { SpecialCachedActive } from './special-cached-active';

export type CustomIconComponent = FC<SVGProps<SVGSVGElement>>;

export const customIcons = {
	// Site & Location
	'special-market': SpecialMarket,
	'special-site-t1': SpecialSiteT1,
	'special-site-t2': SpecialSiteT2,
	'special-site-t3': SpecialSiteT3,
	'special-site-t4': SpecialSiteT4,
	'special-site-unknown': SpecialSiteUnknown,
	'special-site-generic': SpecialSiteGeneric,

	// NE State
	'special-discovered-ne': SpecialDiscoveredNe,
	'special-upgrading': SpecialUpgrading,
	'special-cluster-ne': SpecialClusterNe,
	'special-standalone': SpecialStandalone,

	// NE Navigation
	'special-ne-nav-360-dashboard': SpecialNeNav360Dashboard,
	'special-ne-nav-components': SpecialNeNavComponents,
	'special-ne-nav-topology': SpecialNeNavTopology,
	'special-ne-nav-stacks': SpecialNeNavStacks,
	'special-ne-nav-settings': SpecialNeNavSettings,
	'special-ne-nav-message-support': SpecialNeNavMessageSupport,
	'special-ne-nav-logging': SpecialNeNavLogging,
	'special-ne-nav-terminal': SpecialNeNavTerminal,
	'special-ne-nav-instal-log': SpecialNeNavInstallLog,

	// System & Config
	'special-autoboot-profiles': SpecialAutobootProfiles,
	'special-automation': SpecialAutomation,
	'special-stacks': SpecialStacks,
	'special-packages': SpecialPackages,
	'special-gnmi': SpecialGnmi,
	'special-alarm-settings': SpecialAlarmSettings,
	'special-ne-health': SpecialNeHealth,
	'special-hardware': SpecialHardware,
	'special-modules': SpecialModules,
	'special-resources': SpecialResources,
	'special-version-control': SpecialVersionControl,
	'special-software': SpecialSoftware,
	'special-conflicted-nes': SpecialConflictedNes,
	'special-yang-version-control': SpecialYangVersionControl,
	'special-old-base-os': SpecialOldBaseOs,
	'special-general-details': SpecialGeneralDetails,
	'special-config-template': SpecialConfigTemplate,
	'special-compare': SpecialCompare,
	'special-webhook': SpecialWebhook,
	'special-map-view': SpecialMapView,

	// Misc
	'special-home': SpecialHome,
	'special-lego': SpecialLego,
	'special-scheme': SpecialScheme,
	'special-book': SpecialBook,
	'special-device': SpecialDevice,
	'special-grouped-devices': SpecialGroupedDevices,
	'special-fiber-circuit': SpecialFiberCircuit,
	'special-netgen': SpecialNetgen,
	'special-netgen-s': SpecialNetgenS,

	// Active state
	'special-filter-list-active': SpecialFilterListActive,
	'special-cached-active': SpecialCachedActive,
} as const satisfies Record<string, CustomIconComponent>;

export type CustomIconName = keyof typeof customIcons;

export const isCustomIcon = (icon: string): icon is CustomIconName => {
	return icon in customIcons;
};
