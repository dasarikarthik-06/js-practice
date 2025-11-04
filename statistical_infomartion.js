const sachin = [74, 7, 100, 106, 0, 12, 31, 28, 92, 67, 94, 35, 45, 14, 100, 122, 82, 34, 56, 52, 12, 32, 91, 32, 8, 7, 15, 62, 34, 88, 7, 100, 23, 80, 27, 22, 14, 67, 61, 20, 52, 41, 8, 100, 62, 88, 34, 10, 41, 100, 8, 34, 7, 100, 9, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100];
const virat = [79, 8, 50, 20, 4, 76, 19, 186, 72, 13, 30, 6, 45, 17, 0, 18, 7, 149, 81, 72, 15, 44, 51, 103, 40, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 8];

const players = ["sachin", "virat"]

const scores = [sachin, virat];

function underline(text) {
  return text + "\n" + '-'.repeat(50);
}

function isEven(length) {
  return length % 2 === 0;
}

function sqr(number) {
  return number * number;
}

function meanOf(data) {
  let sumOfElements = 0;
  for (let index = 0; index < data.length; index++) {
    sumOfElements += data[index];
  }
  const mean = sumOfElements / data.length;
  return mean;
}

function sort(data) {
  const sortedData = data
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  return sortedData;
}

function median(data) {
  const sortedData = sort(data);
  return sortedData[Math.floor(sortedData.length / 2)]
}

function standardDeviation(data, mean) {
  let sumOfSquares = 0;

  for (let index = 0; index < data.length; index++) {
    const distanceFromMean = data[index] - mean;
    sumOfSquares += sqr(distanceFromMean);
  }

  return Math.sqrt(sumOfSquares / data.length);
}

function showStats() {
  for(let index = 0; index < players.length; index++) {
    const data = scores[index];
    const meanData = meanOf(data);
    const medianData = median(data);
    const stdDeviation = standardDeviation(data, meanData);
    console.log("\n", underline("stats"))

    console.log(`${players[index]}'s scores in last 100 innings:`, scores[index]);
    console.log(`Mean:               ${meanData}`);
    console.log(`Median:             ${medianData}`);
    console.log(`Standard deviation: ${stdDeviation}`)
  }
}

showStats();
