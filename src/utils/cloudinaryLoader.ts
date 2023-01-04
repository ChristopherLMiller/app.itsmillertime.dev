export const CloudinaryLoader = ({ src, width, quality }: any) => {
  return `https://images.itsmillertime.dev/f_auto,q_${quality},w_${width}/${src}`;
};
