import { testGeneratePattern, underline } from "./patterns.js";

const FILLED_RECT = "filled-rectangle";

function testFilledRectangle() {
  console.log(underline(FILLED_RECT));
  testGeneratePattern("zero dimension", FILLED_RECT, [0, 0], "");
  testGeneratePattern("1C and 1R", FILLED_RECT, [1, 1], "*");
  testGeneratePattern("2C and 3R", FILLED_RECT, [2, 3], "**\n**\n**");
  testGeneratePattern("1C and 5R", FILLED_RECT, [1, 5], "*\n*\n*\n*\n*");
  testGeneratePattern("6C and 2R", FILLED_RECT, [6, 2], "******\n******");
}

function testHollowRectangle() {
  testGeneratePattern(
    "5C and 4R, hollow",
    "hollow-rectangle",
    [5, 4],
    `*****\n*   *\n*   *\n*****`,
  );
  testGeneratePattern(
    "1C and 4R, hollow",
    "hollow-rectangle",
    [1, 4],
    "*\n*\n*\n*",
  );
  testGeneratePattern("1C and 1R, hollow", "hollow-rectangle", [1, 1], `*`);
}

function main() {
  testFilledRectangle();
  testHollowRectangle();

  testGeneratePattern(
    "alternate rectangle",
    "alternating-rectangle",
    [3, 3],
    "***\n---\n***",
  );
  testGeneratePattern(
    "spaced-alternating-rectangle",
    "spaced-alternating-rectangle",
    [6, 2],
    "******\n------",
  );
  testGeneratePattern("triangle", "triangle", [3], "*\n**\n***");
  testGeneratePattern(
    "right-aligned trianle",
    "right-aligned-triangle",
    [3],
    "  *\n **\n***",
  );
}

main();
