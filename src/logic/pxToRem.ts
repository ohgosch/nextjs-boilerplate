export const pxToRem = (px: number): string => {
  const rem = 0.0625;
  return `${rem * px}rem`;
};

export default pxToRem;
