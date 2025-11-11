export const generateLine = (
  col,
  middleChars = "*",
  firstChar = "*",
  lastChar = "*"
) => {
  return col > 1 ? firstChar + middleChars.repeat(col - 2) + lastChar : "*";
};
