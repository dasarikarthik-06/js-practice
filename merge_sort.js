const merge = (data, start, mid, end) => {
  const left = mid - start + 1;
  const right = end - mid;
  const leftHalf = [];
  const rightHalf = [];
  for (let index = 0; index < left; index++) {
    leftHalf.push(data[start + index]);
  }

  for (let index = 0; index < right; index++) {
    rightHalf.push(data[mid + 1 + index]);
  }

  let i = 0;
  let j = 0;
  let k = start;

  while (i < left && j < right) {
    if (leftHalf[i] < rightHalf[j]) {
      data[k] = leftHalf[i];
      i++;
    } else {
      data[k] = rightHalf[j];
      j++;
    }
    k++;
  }

  while (i < left) {
    data[k] = leftHalf[i];
    i++;
    k++;
  }

  while (j < right) {
    data[k] = rightHalf[j];
    j++;
    k++;
  }
};

const mergeSort = (data, start, end) => {
  console.log(data);
  console.log("Start: ", start, "end: ", end);
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(data, start, mid);
    mergeSort(data, mid + 1, end);
    merge(data, start, mid, end);
  }
  return data;
};
const data = [9, 4, 2, 2, 1];
console.log(data);
const sortedData = mergeSort(data, 0, data.length - 1);
console.log(sortedData);
