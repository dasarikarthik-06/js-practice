const startOfEncode = "0123456789il";

function underline(data) {
  return data + "\n" + '-'.repeat(data.length);
}

function encodeInteger(data) {
  let bencodedData = "i" + data + "e";
  return bencodedData;
}

function encodeString(data) {
  return "" + data.length + ":" + data;
}

function encodeList(data) {
  let bencodedData = "l";
  for (let currIndex = 0; currIndex < data.length; currIndex++) {
    bencodedData += encodeCipher(data[currIndex])
  }
  bencodedData += 'e';
  return bencodedData;
}



function encodeCipher(data) {
  if (typeof data === 'number') {
    return encodeInteger(data);
  }
  if (typeof data === 'string') {
    return encodeString(data);
  }
  return encodeList(data);
}

function decodeInteger(data, endOfThisElement) {
  const decodedData = parseInt(data.slice(1, endOfThisElement));
  return decodedData;
}

function decodeString(data) {
  const colonIndex = data.indexOf(':');
  const length = parseInt(data.slice(0, colonIndex));
  const start = colonIndex + 1;
  const decodedData = data.slice(start, start + length);
  return [decodedData, start + length];
}

function decodeList(data) {
  let remainingData = data.slice(1);
  let decodedData = [];
  while(remainingData.length > 1) {
    let var1 = decodeCipher(remainingData);
    decodedData.push(var1[0]);
    const endOfTheElement = var1[1];
    remainingData = remainingData.slice(endOfTheElement + 1);
  }
  
  return decodedData;
}

function decodeCipher(data) {
  if (data[0] === 'i') {
    const endOfThisElement = data.indexOf('e');
    return [decodeInteger(data, endOfThisElement), endOfThisElement];
  }
  if (data[0] === 'l') {
    return decodeList(data);
  }
  return decodeString(data);
}

function Cipher(data) {
  if (typeof data === 'string' && startOfEncode.includes(data[0])) {
    return decodeCipher(data);
  }
  return encodeCipher(data);
}

function composeMessage(desc, data, actual, expected) {
  const status = areDeepEqual(actual, expected) ? "✅" : "❌";
  let message = status + desc;
  if (status === "❌") {
    message += `\nactual = ${actual} but expected is ${expected}`;
  }
  return message;
}

function testCipher(desc, data, expected) {
  const actual = Cipher(data);
  const message = composeMessage(desc, data, actual, expected);
  console.log(message);
}

function testEncodeString() {
  testCipher("single letter", "k", "1:k");
  testCipher("multiple letters", "hello", "5:hello");
  testCipher("empty string", "", "0:")
}

function testEncodeInteger() {
  testCipher("only integer", 123, "i123e");
  testCipher("negative integers", -423, "i-423e");
  testCipher("single digit", 1, "i1e");
}

function testEncodeList() {
  testCipher("simple list", [1, "two"], "li1e3:twoe");
  testCipher("nested array", [1, "two", ["three", 4]], "li1e3:twol5:threei4eee");
}

function testDecodeInteger() {
  testCipher("single digit", "i0e", 0);
}

function testDecodeString() {
  testCipher("single char", "1:w", "w");
}

function testDecodeList() {
  testCipher("single element", "li3ee", [3]);
  testCipher("sd", "li1e3:twol5:threei4eee", [1, "two", ["three", 4]])
}

function encode() {
  testEncodeInteger();
  testEncodeString();
  testEncodeList();
}

function decode() {
  testDecodeInteger();
  testDecodeString();
  testDecodeList();
}

function main() {
  console.log("\n", underline("encode testcases"));
  encode();
  console.log("\n", underline("decode testcases"));
  decode();
}
main();

function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}
