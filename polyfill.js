// map

let arr = [1, 2, 3, 4, 5];

let newarr = arr.map(function (x) {
    return x * x;
})

// console.log(newarr);

//map polyfill

function myPolyfill(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(cb(arr[i]));
    }
    return newArr;
}

function square(x) {
    return x * x;
}

// console.log(myPolyfill(arr, square));

//filter

let filterArr = arr.filter(function (x) {
    return x%2 == 0
})

// console.log(filterArr);

function polyfillFilter(arr, cb) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (cb(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

}

function isEven(x){
    return x%2 == 0;
}

// console.log(polyfillFilter(arr, isEven));

//reduce

function polyfillReduce(arr, cb) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += cb(0,arr[i]);
    }
    return sum;
}

function sum(x, y) {
    return x + y;
}

console.log(polyfillReduce(arr, sum));

