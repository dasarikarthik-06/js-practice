let endOfThatElement;

function decodeInteger(data) {
  endOfThatElement = data.indexOf("e");
  const decodedData = parseInt(data.slice(1, endOfThatElement));
  endOfThatElement = endOfThatElement + 1;
  return decodedData;
}

function decodeString(data) {
  const colonIndex = data.indexOf(":");
  const length = parseInt(data.slice(0, colonIndex));
  const start = colonIndex + 1;
  endOfThatElement = start + length;
  const decodedData = data.slice(start, endOfThatElement);
  return decodedData;
}

function decodeList(data) {
  const decodedData = [];
  let remainingData = data.slice(1);
  while (remainingData.length > 1) {
    const decodedPart = decode(remainingData);
    decodedData.push(decodedPart);
    remainingData = remainingData.slice(endOfThatElement);
    console.log(remainingData);
    if(remainingData[0] === 'e') {
        break;
    }
  }
return decodedData;
}

function decode(data) {
  let remainingData = data;
  let decodedData;
  if (remainingData[0] === "i") {
    decodedData =  decodeInteger(data);
    return decodedData;
  } else if (remainingData[0] === "l") {
    decodedData = decodeList(data);
    return decodedData;
  } else {
    decodedData = decodeString(data);
    return decodedData;
  }
}

function main() {
//   console.log(decode("i-42e"));
//   console.log(decode("5:hello"));
//   console.log(decode("li3e"));
  console.log(decode("l5:applei123el6:bananai-5eee"));
//   console.log(decode("l5:hello6:bababai2ee"))
}

main();
