/** @deprecated */
export function DsDeprecatedComponent() {
	return null;
}

export function DsActiveComponent() {
	return null;
}

/** @deprecated */
export const DsDeprecatedNamespacedComponent = {
	Root: () => null,
	Content: () => null,
};

export const DsActiveNamespacedComponent = {
	Root: () => null,
	Content: () => null,
};

/** @deprecated */
export const DsDeprecatedTypedComponent: () => null = () => null;

export function DsSubComponents() {
	return null;
}

// eslint-disable-next-line @typescript-eslint/no-deprecated
DsSubComponents.Deprecated = DsDeprecatedComponent;
DsSubComponents.Active = DsActiveComponent;
