import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';

type PropertyValuePredicate<T extends PropertyValue> = (value: PropertyValue) => value is T;

type PropertyValue = TSESTree.Property['value'];

type Args<T extends PropertyValue> = {
	obj: TSESTree.ObjectExpression;
	name: string;
	predicate?: PropertyValuePredicate<T>;
};

export function getObjectProperty<T extends PropertyValue = PropertyValue>(
	args: Args<T>,
): (TSESTree.Property & { value: T }) | undefined {
	const { obj, name, predicate = () => true } = args;

	return obj.properties.find((property) => {
		return (
			property.type === AST_NODE_TYPES.Property &&
			property.key.type === AST_NODE_TYPES.Identifier &&
			property.key.name === name &&
			predicate(property.value)
		);
	}) as never;
}
