import { generateLine } from "./generate_line.js";

export const alternatingRectangle = (rows, cols, noOfSymbols = 2) => {
  const symbols = ["*", "-", " "];
  const lines = [];
  for (let row = 0; row < rows; row++) {
    const symbol = symbols[row % noOfSymbols];
    lines.push(generateLine(cols, symbol, symbol, symbol));
  }
  return lines;
};
