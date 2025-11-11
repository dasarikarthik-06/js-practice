import { generateLine } from "./generate_line.js";

export const hollowRectangle = (rows, cols) => {
  const lines = [];
  lines.push(generateLine(cols));
  for (let row = 0; row < rows - 2; row++) {
    lines.push(generateLine(cols, " "));
  }
  lines.push(generateLine(cols));
  return lines;
};
