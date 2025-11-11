import { generateLine } from "./generate_line.js";

export const rightFacedTriangle = (rows) => {
  const lines = [];
  for (let row = 1; row <= rows; row++) {
    lines.push(generateLine(row));
  }
  return lines;
};
