console.clear();

const flatArray = (x => x)

const countSameStrings = (count, string, stringToCheck) =>
  string === stringToCheck ? count += 1 : count;


const countBlue = (count, string) =>  countSameStrings(count, string, "blue")

const ribbonColors = ["red", "blue", "red", "green", "red", "blue"];
console.log(ribbonColors.reduce(countBlue, 0));

const constellations = [["orion", "leo"], ["tauras"], ["orion", "gemini"]];
console.log(constellations.flatMap(flatArray))

const uniqueElements = (noDuplicates, element) => {
  if (!noDuplicates.includes(element)) {
    noDuplicates.push(element);
    return noDuplicates;
  }
  return noDuplicates
}

const birds = ["sparrow", "crow", "sparrow", "eagle", "crow"];
console.log(birds.reduce(uniqueElements, []))

const studentsList = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]];
console.log(studentsList.flatMap(flatArray).reduce(uniqueElements, []))

const add = (x, y) =>  x + y

const refillLog = [[5, 3], [2], [4, 1]];
console.log(refillLog.flatMap(flatArray).reduce(add, 0))

const rehearsalNotes = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
console.log(rehearsalNotes.flatMap(flatArray).some(x => x === "do"));

const temperature = [[22, 23], [25, 24, 22], [29]];
console.log(temperature.flatMap(flatArray).every(x =>  x < 32 ));

const runnerLog = [[2, 3, 2], [4], [1, 1]];
console.log(runnerLog.flatMap(flatArray).reduce(add, 0));

const colors = [["blue", "yellow"], ["yellow", "green"], ["blue"]];
console.log(colors.flatMap(flatArray).reduce(uniqueElements, []));

const countDune = (count, string) => {
  return countSameStrings(count, string, "Dune")
}
const books = ["Dune", "Dune", "Foundation", "Dune"];
console.log("Dune", books.reduce(countDune, 0));

const ingredients = [["rice", "lentils"], ["rice"], ["curd", "lentils"]];
console.log(ingredients.flatMap(flatArray).reduce(uniqueElements, []))

const harmonyNotes = [["la", "la"], ["mi"], ["so", "la"]];
console.log(harmonyNotes.flatMap(flatArray).some(x => x === "so"));

const vegetableWeights = [[4, 6], [2, 3, 1], [5]];
console.log(vegetableWeights.flatMap(flatArray).reduce(add, 0));

const sizes = ["small", "large", "medium", "small"];
console.log(sizes.reduce(uniqueElements, []))

const countDeer = (count, string) => {
  return countSameStrings(count, string, "deer")
}

const animals = ["deer", "deer", "rabbit", "deer"];
console.log("Deer: ", animals.reduce(countDeer, 0));

const completedChapters = [[1, 2], [3], [2, 4, 1]];
console.log(completedChapters.flatMap(flatArray).reduce(uniqueElements, []));

const danceSteps = [["step", "tap"], ["turn", "step"]];
console.log(danceSteps.flatMap(flatArray).some(x => x === "turn"))

const waterUsed = [[1, 2, 1], [3], [2]];
console.log(waterUsed.flatMap(flatArray).reduce(add, 0));

const cranes = [[3, 2], [1], [4]];
console.log(cranes.flatMap(flatArray).reduce(add, 0));

const fruits = [["apple", "banana"], ["apple"], ["apple", "orange"]];
console.log(fruits.flatMap(flatArray).reduce(uniqueElements, []));

const noOfPens = [[2, 3], [1], [3, 2]];
console.log(noOfPens.flatMap(flatArray).reduce(add, 0));

const movies = [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]];
console.log(movies.flatMap(flatArray).reduce(uniqueElements, []))

const studentsSign = ["A", "B", "A", "C", "B"];
console.log(studentsSign.reduce(uniqueElements, []));

const icecreams = [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]];
console.log(icecreams.flatMap(flatArray).reduce((count, string) => countSameStrings(count, string, "chocolate"), 0));

const flowers = [["rose", "lily"], ["lily", "tulip"]];
console.log(flowers.flatMap(flatArray).reduce(uniqueElements, []));

const repetitions = [[10, 20], [5], [15, 10]];
console.log(repetitions.flatMap(flatArray).reduce(add, 0));

const stations = [["A", "B"], ["B", "C"], ["A"]];
console.log(stations.flatMap(flatArray).reduce(uniqueElements, []));

const noOfPages = [[12, 10], [5], [8, 7]];
console.log(noOfPages.flatMap(flatArray).reduce(add, 0));

const rainfall = [[3, 4], [5, 2], [1]];
console.log(rainfall.flatMap(flatArray).every(x => x > 0));

const fruitsWeight = [[4, 3], [2], [3, 1]];
console.log(fruitsWeight.flatMap(flatArray).reduce(add, 0));

//31
const snacks = [["idli", "vada"], ["vada", "upma"]];
console.log(snacks.flatMap(flatArray).reduce(uniqueElements, []));
//64
const reverse = (reversedMoves, currMove) => {
  reversedMoves.unshift(currMove);
  return reversedMoves;
}

const danceMoves = ["step", "tap", "turn", "step"];
console.log(danceMoves.reduce(reverse, []))
//65
let frequencies = [];
let elements = [];
const frequency = (word) => {
  const index = elements.indexOf(word);
  if (index !== -1) {
    frequencies[index] += 1;
  } else {
    elements.push(word);
    frequencies.push(1);
  }
}

const words = ["sun", "moon", "sun", "star"];
words.map(frequency);
console.log(frequencies, elements)

//82

const countWord = (count, sentence) => {
  const indexOfWord = sentence.indexOf("rain");
  if (indexOfWord !== -1) {
    count += 1
  }
  return count
}

const entries = [
  "It rained heavily today.",
  "The sun was bright and warm.",
  "Light rain fell in the evening.",
  "No rain this week, just clouds."
];

console.log(entries.reduce(countWord, 0));

const toSplit = (x => x.split(" "));
const toFlat = (x => x);
const predicate = (x => x.startsWith("a") || x.startsWith("A"))

const sentences = [
  'just a phrase',
  'also another phrase',
  'arbitrary phrase',
  'An interesting phrase'
];

console.log(sentences.map(toSplit).flatMap(toFlat).filter(predicate));
