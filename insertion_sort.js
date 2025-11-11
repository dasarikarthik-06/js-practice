const insertionSort = (data) => {
    for (let index = 1; index < data.length; index++) {
        const currElement = data[index]
        let innerIndex = index - 1;
        while (data[innerIndex] > currElement && innerIndex >= 0) {
           data[innerIndex + 1] = data[innerIndex];
           innerIndex--;
        }
        data[innerIndex + 1] = currElement
    }
    return data;
}

const data = [9, 4, 1, 2, 1];
console.log(insertionSort(data));
