
function join(prevString, newString, seperator = "\n") {
  return prevString + seperator + newString;
}

function generateRightAngle(dimensions) {
  let pattern = "*".repeat(1);
  for (let index = 2; index <= dimensions[0]; index++) {
    pattern = join(pattern, "*".repeat(index));
  }
  return pattern;
}

function generateRightAlignedTriangle(dimensions) {
  let pattern = " ".repeat(dimensions[0] - 1) + "*".repeat(1);

  for (let index = 2; index <= dimensions[0]; index++) {
    const newString = " ".repeat(dimensions[0] - index) + "*".repeat(index);
    pattern = join(pattern, newString);
  }

  return pattern;
}

function generateHollowRow(dimensions) {
  let column = "";

  for (let currColCount = 0; currColCount < dimensions[0]; currColCount++) {
    column += currColCount === 0 || currColCount === dimensions[0] - 1
      ? "*"
      : " ";
  }

  return column + "\n";
}

function generateHollowRectangle(dimensions) {
  let column = generateStarsRow(dimensions) + "\n";

  for (let currRowCount = 1; currRowCount < dimensions[1] - 1; currRowCount++) {
    column += generateHollowRow(dimensions);
  }

  if (dimensions[1] > 1) {
    column += generateStarsRow(dimensions) + "\n";
  }

  return column;
}

function generateFilledRectangle(dimensions) {
  let pattern = "*".repeat(dimensions[0]);
  for (let currRowCount = 1; currRowCount < dimensions[1]; currRowCount++) {
    pattern = join(pattern, "*".repeat(dimensions[0]));
  }
  return pattern;
}

function generateDashesRow(dimensions) {
  return "-".repeat(dimensions[0]);
}

function generateStarsRow(dimensions) {
  return "*".repeat(dimensions[0]);
}

function generateSpacesRow(dimensions) {
  return " ".repeat(dimensions[0]);
}

function alternateRectangle(dimensions) {
  let specialChars = ["*", "-"];
  let pattern = specialChars[0].repeat(dimensions[0]);

  for (let index = 1; index < dimensions[1]; index++) {
    const newString = specialChars[index % 2].repeat(dimensions[0]);
    pattern = join(pattern, newString);
  }

  return pattern;
}

function generateSpacedAlternate(dimensions) {
  let specialChars = ["*", "-", " "];
  let pattern = specialChars[0].repeat(dimensions[0]);

  for (let index = 1; index < dimensions[1]; index++) {
    const newString = specialChars[index % 3].repeat(dimensions[0]);
    pattern = join(pattern, newString);
  }

  return pattern;
}

function generatePattern(style, dimensions) {
  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return "";
  }
  switch (style) {
    case "filled-rectangle":
      return generateFilledRectangle(dimensions);
    case "hollow-rectangle":
      return generateHollowRectangle(dimensions).trim();
    case "alternating-rectangle":
      return alternateRectangle(dimensions).trim();
    case "spaced-alternating-rectangle":
      return generateSpacedAlternate(dimensions);
    case "triangle":
      return generateRightAngle(dimensions);
    case "right-aligned-triangle":
      return generateRightAlignedTriangle(dimensions);
  }
}

function generateMessage(desc, style, dimensions, actual, expected) {
  const status = actual === expected ? " ✅ " : " ❌ ";

  if (status === " ✅ ") {
    return "\t" + status + desc;
  }

  const inputFragment = " |  '" + style + "," + dimensions + "' ";
  const actualFragment = " | actual: " + actual;
  const expectedFragment = " | expected: " + expected;
  let message = "\n\t" + status + desc + "\n\n\t" + inputFragment;
  message = message + actualFragment + expectedFragment;

  return message;
}

export function testGeneratePattern(desc, style, dimensions, expected) {
  const actual = generatePattern(style, dimensions);
  const output = generateMessage(desc, style, dimensions, actual, expected);
  console.log(output);
}

export function underline(style) {
  return "\t" + style + "\n\t" + "-".repeat(style.length);
}
