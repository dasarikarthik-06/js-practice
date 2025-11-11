import {generateLine } from "./generate_line.js";

export const filledRectangle = (rows, cols) => {
  const lines = [];
  for (let row = 0; row < rows; row++) {
    lines.push(generateLine(cols));
  }

  return lines;
};
