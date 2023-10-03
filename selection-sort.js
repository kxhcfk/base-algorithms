function findSmallest(array) {
    let smallest = array[0];
    let smallestIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

function selectionSort(array) {
    const newArray = [];

    while (array.length > 0) {
        const smallestIndex = findSmallest(array);

        newArray.push(array.splice(smallestIndex, 1));
    }

    return newArray;
}

const testArray = [5, 3, 6, 2, 10, 123, 1, 0, -200, 30, -30, -20, 0, -1, 0, 15, 20, 1023];

console.log(testArray)
console.log(selectionSort(testArray))
console.log(testArray)