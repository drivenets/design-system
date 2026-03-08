import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';

export function getObjectProperty(
	obj: TSESTree.ObjectExpression,
	name: string,
): TSESTree.Property | undefined {
	return obj.properties.find((property): property is TSESTree.Property => {
		return (
			property.type === AST_NODE_TYPES.Property &&
			property.key.type === AST_NODE_TYPES.Identifier &&
			property.key.name === name
		);
	});
}
