function binarySearch(array, item) {
    let lowIndex = 0;
    let highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        let midIndex = Math.floor((lowIndex + highIndex) / 2);
        let guessItem = array[midIndex];

        if (guessItem === item) {
            return midIndex;
        }

        if (guessItem > item) {
            highIndex = midIndex - 1;
        }

        if (guessItem < item) {
            lowIndex = midIndex + 1;
        }
    }

    return null;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(binarySearch(testArray, 30))
console.log(binarySearch(testArray, 7))