import { generateLine } from "./generate_line.js";

export const leftFacedTriangle = (rows) => {
  const lines = [];
  for (let row = 1; row <= rows; row++) {
    const line = " ".repeat(rows - row) + generateLine(row);
    lines.push(line);
  }
  return lines;
};
