export function JSXElement(name: string) {
	return `JSXOpeningElement[name.name='${name}']`;
}

export function JSXElementName(name: string) {
	return `${JSXElement(name)} > .name`;
}

export function JSXElementAttribute(element: string, attribute: string, value: string) {
	return `${JSXElement(element)} > ${JSXAttribute(attribute, value)}`;
}

export function JSXAttribute(name: string, value?: string) {
	let selector = `JSXAttribute[name.name='${name}']`;

	if (typeof value !== 'undefined') {
		// Match both expressions (prop={'value'}) and literal values (prop="value").
		selector += `:matches([value.expression.value='${value}'], [value.value='${value}'])`;
	}

	return selector;
}
