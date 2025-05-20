/**
 * Creates a controlled pause in code execution, useful for rate limiting, testing timing scenarios,
 * or implementing retry mechanisms
 * @param ms - Delay duration in milliseconds
 * @returns Promise that resolves after the specified delay
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
