//Map , flter , reduce

//map function
let arr = [1, 2, 3, 4, 5, 6, 7];

let newarr = arr.map(function (x) {
    return x * x;
})

console.log(newarr);

// filter
let filterArr = arr.filter(function (x) { 
    return x % 2 == 0;
});

console.log(filterArr);

// reduce

// let reduceArr = arr.reduce(function (a, b) {
//     return a + b;
// });

let reduceArr = arr.reduce(function (acc, x) {
    return acc + x;
}, 0);

console.log(reduceArr);