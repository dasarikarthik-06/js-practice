const areEqual = function (value1, value2) {
  console.log()
  return value1 === value2;
}

const sort = function (data) {
  const sortedData = data;

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

const frequenciesOfData = function (data) {
  let index = 0;
  const frequencies = [];
  while (index < data.length) {
    const firstIndexOfElement = data.indexOf(data[index]);
    const lastIndexOfElement = data.lastIndexOf(data[index]);
    const frequency = (lastIndexOfElement - firstIndexOfElement) + 1;
    frequencies.push([frequency, data[index]]);
    index = lastIndexOfElement + 1;
  }
  return frequencies;
}

const modeOf = function (data) {
  const sortedData = sort(data);
  const frequencies = frequenciesOfData(sortedData);
  let max = -Infinity;
  let mostFrequentElement;
  for (let index = 0; index < frequencies.length; index++) {
    if(max < frequencies[index][1]) {
      max = frequencies[index][1];
      mostFrequentElement = frequencies[index][0];
    }
  }
  return mostFrequentElement;
}

const composeMessage = function (desc, data, actual, expected) {
  const status = areEqual(actual, expected) ? "✅" : "❌";
  let message = status + desc;
  if (!areEqual(actual, expected)) {
    message += "\n actual :" + actual + " expected: " + expected;
  }
  return message;
}

function testMode(desc, data, expected) {
  const actual = modeOf(data);
  const message = composeMessage(desc, data, actual, expected);
  console.log(message);
}

function main() {
  testMode("mode is 1", [1, 2, 3], 1);

}

main();
