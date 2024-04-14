let arr = [1, 2, 3, 4, 5];

//square
let newarr = arr.map(function (x) {
    return x * x;
});

// binary

const binaryarr = arr.map((x) => x.toString(2));

// console.log(binaryarr);


// console.log(newarr);

var peopleArray = [
    { firstName: "Alice", lastName: "Smith", age: 30 },
    { firstName: "Bob", lastName: "Johnson", age: 35 },
    { firstName: "Charlie", lastName: "Brown", age: 25 },
    { firstName: "Diana", lastName: "Garcia", age: 40 } 
];

// find the first and last name of array.

let res = peopleArray.map((x) => x.firstName + " " + x.lastName);

console.log(res);