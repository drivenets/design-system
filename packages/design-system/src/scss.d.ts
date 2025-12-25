declare module '*.module.scss' {
	const classNames: { [key: string]: string };
	export = classNames;
}

declare module '*.scss';
