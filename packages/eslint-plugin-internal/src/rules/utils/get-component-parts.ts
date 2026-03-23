import {
	AST_NODE_TYPES,
	type ParserServicesWithTypeInformation,
	type TSESTree,
} from '@typescript-eslint/utils';

type ComponentParts =
	| {
			name: string;
			displayName: string;
			node: TSESTree.MemberExpression | TSESTree.Identifier;
	  }
	| {
			name: null;
			displayName: null;
			node: null;
	  };

export function getComponentParts(
	services: ParserServicesWithTypeInformation,
	node: TSESTree.MemberExpression | TSESTree.Identifier | undefined,
): ComponentParts {
	if (!node) {
		return {
			name: null,
			displayName: null,
			node: null,
		};
	}

	if (node.type === AST_NODE_TYPES.Identifier) {
		return {
			node,
			name: node.name,
			displayName: node.name,
		};
	}

	if (node.object.type !== AST_NODE_TYPES.Identifier || node.property.type !== AST_NODE_TYPES.Identifier) {
		return {
			name: null,
			displayName: null,
			node: null,
		};
	}

	const type = services.getTypeAtLocation(node.object);

	// We have 2 types of compound component references:
	// 	1. Namespace - i.e., `DsMenu.Root` (`DsMenu` is a plain object)
	// 	2. Sub-component - i.e., `DsFormControl.TextInput` (`DsFormControl` is a component)
	//
	// For namespaced components, the actual component name is the namespace (e.g., `DsMenu`).
	// For sub-components, the actual component name is the sub-component (e.g., `TextInput`).
	const isNamespaced = type.getCallSignatures().length === 0;

	if (isNamespaced) {
		return {
			node: node.object,
			name: node.object.name,
			displayName: node.object.name,
		};
	}

	return {
		node: node.property,
		name: node.property.name,
		displayName: `${node.object.name}.${node.property.name}`,
	};
}
