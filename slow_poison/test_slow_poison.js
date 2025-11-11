
import { filledRectangle } from "./filled_rectangle.js";
import { hollowRectangle } from "./hollow_rectangle.js";
import { alternatingRectangle } from "./alternating_rectangle.js";
import { spacedAlternatingRectangle } from "./spaced_alternating.js";
import { rightFacedTriangle } from "./right_faced_triangle.js";
import { leftFacedTriangle } from "./left_faced_triangle.js";

const generatePattern = (style, dimensions) => {
  const rows = dimensions[0];
  const cols = dimensions[1];
  if (rows === 0 || cols === 0) {
    return "";
  }
  const pattern = style(rows, cols);
  return pattern.join("\n");
};

console.log("\nHOLLOW RECTANGLE");
console.log(generatePattern(hollowRectangle, [5, 3]));
console.log("\nALTERNATING RECTANGLE");
console.log(generatePattern(alternatingRectangle, [5, 3]));
console.log("\nSPACED ALTERNATING RECTANGLE");
console.log(generatePattern(spacedAlternatingRectangle, [5, 3]));
console.log("\nFILLED RECTANGLE");
console.log(generatePattern(filledRectangle, [2, 3]));
console.log("\nRIGHT FACED TRIANGLE");
console.log(generatePattern(rightFacedTriangle, [4]));
console.log("\n LEFT FACED TRIANGLE");
console.log(generatePattern(leftFacedTriangle, [4]));
