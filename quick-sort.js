function sum(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sum(array.slice(1));
    }
}

// console.log(sum([1, 2, 3, 5, 10, 10]))

function count(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return 1 + count(array.slice(1))
    }
}

// console.log(count([1, 2, 3, 5, 10, 10]))

function max(array) {
    if (array.length === 2) {
        return array[0] > array[1] ? array[0] : array[1];
    } else {
        const subArray = max(array.slice(1));

        return array[0] > subArray ? array[0] : subArray;
    }
}

// console.log(max([1, 2, -2, 30, 100, Infinity]))

function binarySearch(array, item) {
    if (array.length === 1) {
        if (array[0] === item) {
            return array[0];
        } else {
            return null
        }
    } else {
        let lowIndex = 0;
        let highIndex = array.length - 1;

        let midIndex = Math.floor((lowIndex + highIndex) / 2);

        if (array[midIndex] > item) {
            return binarySearch(array.slice(0, midIndex), item);
        } else {
            return binarySearch(array.slice(midIndex + 1), item);
        }
    }
}

// console.log(binarySearch([1, 2, 3, 4, 5], 5))

function quickSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        const pivot = array[0];

        const subArray = array.slice(1);

        const less = subArray.filter(item => item <= pivot);
        const greater = subArray.filter(item => item > pivot);

        return [...quickSort(less), pivot, ...quickSort(greater)]
    }
}

console.log(quickSort([3, 4, 5, 0, -1, 4]))