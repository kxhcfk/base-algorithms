function countDown(number) {
    console.log(number);
    if (number <= 0) {
        return null;
    } else {
        return countDown(number - 1);
    }
}

// countDown(10)

function factorial(number) {
    if (number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1)
    }
}

// console.log(factorial(5));
// console.log(factorial(10));
// console.log(factorial(100));
// console.log(factorial(1000));
// console.log(factorial(10000));



function fib(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

// console.log(fib(40))

const map = {0: 0, 1: 1};

function fibStack(n) {
    if (n in map) {
        return map[n]
    }

    map[n] = fibStack(n - 1) + fibStack(n - 2);

    return map[n];
}

console.log(fibStack(500))