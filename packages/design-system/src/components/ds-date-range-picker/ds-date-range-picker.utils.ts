export const earlierDate = (a: Date | undefined, b: Date | undefined): Date | undefined => {
	if (!a) {
		return b;
	}
	if (!b) {
		return a;
	}
	return a < b ? a : b;
};

export const laterDate = (a: Date | undefined, b: Date | undefined): Date | undefined => {
	if (!a) {
		return b;
	}
	if (!b) {
		return a;
	}
	return a > b ? a : b;
};
