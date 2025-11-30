const generateScreen = () => {
  const screen = [];
  for (let i = 0; i < 20; i++) {
    screen.push(" ".repeat(20).split(""));
  }
  return screen;
};

const drawString = (screen, string, x, offSet, direction) => {
  for (let index = 0; index < string.length; index++) {
    const newX = x + index % screen.length;
    const newY = Math.abs(offSet + (index - screen.length)) % screen.length;
    screen[newX][newY] = string[index];
  }
};

const displayScreen = (screen) => {
  console.log(screen.map((row) => row.join("")).join("\n"));
};

let offSet = 0;

setInterval(() => {
  console.clear();
  const screen = generateScreen();
  drawString(screen, "karthik", 1, offSet, "di");
  offSet = (offSet + 1) % screen.length;
  displayScreen(screen);
}, 100, offSet = 0);
