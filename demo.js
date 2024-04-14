// let arr = [1, 2, 3, 4, 5, 6];

// // let newarr = arr.map(function (v) {
// //     return v * v;
// // });

// // console.log(newarr);

// function binary(x) {
//     return x.toString(2);
// }

// const output = arr.map(binary);

// console.log(output);

// funcrion inside function - >  HOD.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const res = arr.filter((x) => {
//     return x%2  === 0;
// })

// console.log(res);


// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

const res1 = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(res1);


