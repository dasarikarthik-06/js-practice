const merge = (data) => {
   
}

const mergeSort = (data) => {
  const leftHalf = data.slice(0, data.length / 2)
  const rightHalf  = data.slice(data.length / 2);
  return rightHalf.concat(leftHalf);
}
const data = [9,4,2,2,1];
console.log(data)
const sortedData = mergeSort(data)
console.log(sortedData);
