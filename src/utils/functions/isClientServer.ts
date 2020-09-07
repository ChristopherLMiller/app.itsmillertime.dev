export const isClient = () => {
  return window !== undefined;
};

export const isServer = () => {
  return window === undefined;
};
