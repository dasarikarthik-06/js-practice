let screen = [];
let offSet = 0;

const generateScreen = () => {
  screen = [];
  for (let index = 0; index < 15; index++) {
    screen.push(" ".repeat(15).split(""));
  }
};

const newCoord = {
  left: (x, offSet, index) => {
    const newY = (index + offSet) % screen[x].length;
    return [x, newY];
  },

  right: (x, offSet, index) => {
    const newY = (screen[x].length + (index - offSet)) % screen[x].length;
    return [x, newY];
  },
  up: (offSet, x, index) => {
    const newX = (index + x) % screen.length;
    return [newX, offSet];
  },
  down: (offSet, x, index) => {
    const newX = (screen.length + (index - x)) % screen.length;
    return [newX, offSet];
  },
};

const drawString = (string, x, offSet, direction) => {
  for (let index = 0; index < string.length; index++) {
    const [newX, newY] = newCoord[direction](x, offSet, index);
    screen[newX][newY] = string[index];
  }
};

export const displayScreen = (screen) => {
  console.log(screen.map((row) => row.join("")).join("\n"));
};

const elementsToPrint = [
  { string: "karthik", x: 0, direction: "right" },
  { string: "newthings", x: 2, direction: "left" },
  { string: "enjoying", x: 5, direction: "left" },
  { string: "khasim", x: 8, direction: "right" },
  { string: "hello", x: 2, direction: "up" },
  { string: "what's up!!", x: 11, direction: "down" },
];

setInterval(() => {
  console.clear();
  generateScreen();
  elementsToPrint.forEach(({ string, x, direction }) =>
    drawString(string, x, offSet, direction)
  );

  displayScreen(screen);
  offSet = (offSet + 1) % (screen.length);
}, 200);
