export const isClient = (): boolean => window !== undefined;

export const isServer = (): boolean => window === undefined;
