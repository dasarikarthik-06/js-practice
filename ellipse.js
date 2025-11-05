const tiles = ["🌑", "🌕"];

const squareOf = function (value) {
  return value * value;
};

const doesBelongsToEllipse = function (p1, p2, a, b) {
  const scaleX = squareOf((p1[0] - p2[0]) / a);
  const scaleY = squareOf((p1[1] - p2[1]) / b);
  return scaleX + scaleY <= 1;
};

const chooseChar = function (doesBelongs) {
    if(doesBelongs) {
        return tiles[1];
    }
    return tiles[0];
}


const ellipse = function (height, width, cx, cy, a, b) {
    const lines = []
  for (let x = 0; x < height; x++) {
    let line = "";
    for (let y = 0; y < width; y++) {
      const doesBelongs = doesBelongsToEllipse([y, x], [cx, cy], a, b);
      line += chooseChar(doesBelongs);
    }
    lines.push(line);
  }
  console.log(lines.join('\n'))
};

ellipse(10, 10, 5, 5, 3, 2);
