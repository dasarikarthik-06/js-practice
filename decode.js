const startOfString = "0123456789";

function decodeInteger(data) {
  let endOfThatElement = data.indexOf("e");
  const decodedPart = parseInt(data.slice(1, endOfThatElement));
  endOfThatElement = endOfThatElement + 1;
  return [decodedPart, endOfThatElement];
}

function decodeString(data) {
  const colonIndex = data.indexOf(":");
  const length = parseInt(data.slice(0, colonIndex));
  const start = colonIndex + 1;
  
  const end = start + length;
  const decodedPart = data.slice(start, end);
  return [decodedPart, end]
}

function decodeList(data) {
  const decodedData = [];
  let index = 1;
  
while(index < data.length) {
  if(data[index] === 'e') {
    index++;
    continue;
  }

  const decodedPartAndEnd = decode(data.slice(index));
  decodedData.push(decodedPartAndEnd[0]);
  index += decodedPartAndEnd[1];
}

  return [decodedData, index]
}


function decode(data) {
  if (data[0] === "i") {
    return decodeInteger(data);
  }
  if(data[0] === 'l') {
    return decodeList(data);
  }
   return decodeString(data);
}

function decodeCipher(data) {
  return decode(data)[0];
}

function main() {
  // console.log(decodeCipher("li34e5:hellol6:bananae"));
  console.log(decodeCipher(decode("lllli32eei43eeee")))
  // console.log(decodeCipher("lli32eei32ee"))
  // console.log(decodeCipher("li32ee"))
}

main();
