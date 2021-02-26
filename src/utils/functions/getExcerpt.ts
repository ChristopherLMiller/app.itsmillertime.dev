export const getExcerpt = (text: string, marker: string): string => {
  if (!text) return;

  return text.slice(0, text.indexOf(marker));
};
