export function JSXElement(name: string, attributes: Record<string, string> = {}) {
	let selector = `JSXOpeningElement[name.name='${name}']`;

	Object.entries(attributes).forEach(([attrName, attrValue]) => {
		selector += `:has( > ${JSXAttribute(attrName, attrValue)} )`;
	});

	return selector;
}

export function JSXElementName(name: string, attributes: Record<string, string> = {}) {
	return `${JSXElement(name, attributes)} > .name`;
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
