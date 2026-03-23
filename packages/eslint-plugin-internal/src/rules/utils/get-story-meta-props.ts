import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';
import { getObjectProperty } from './get-object-property';

/**
 * Collect common meta properties from a story meta object,
 * filtering by the value types supported by the rules.
 */
export function getStoryMetaProps(metaNode: TSESTree.ObjectExpression) {
	const tagsProp = getObjectProperty({
		obj: metaNode,
		name: 'tags',
		predicate: (v) => v.type === AST_NODE_TYPES.ArrayExpression,
	});

	const titleProp = getObjectProperty({
		obj: metaNode,
		name: 'title',
		predicate: (v) => v.type === AST_NODE_TYPES.Literal,
	});

	const componentProp = getObjectProperty({
		obj: metaNode,
		name: 'component',
		predicate: (v) => v.type === AST_NODE_TYPES.Identifier || v.type === AST_NODE_TYPES.MemberExpression,
	});

	return {
		tagsProp,
		titleProp,
		componentProp,
	};
}
