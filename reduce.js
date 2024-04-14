let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// sum of all array
let res = arr.reduce(function (acc, curr) { 
    return acc + curr;
}, 0);

// console.log(res);

// find max

let maximum = arr.reduce(function (max, curr) { 
    max = 0;
    if (curr > max)
        max = curr;
    return max;
})

// console.log(maximum);

var peopleArray = [
    { firstName: "Alice", lastName: "Smith", age: 30 },
    { firstName: "Bob", lastName: "Johnson", age: 35 },
    { firstName: "Charlie", lastName: "Brown", age: 25 },
    { firstName: "Diana", lastName: "Garcia", age: 30 } 
];

// o/p => {30: 2, 35 : 1, 25 : 1}

const output = peopleArray.reduce((person, curr) => {
    if (person[curr.age]) {
        person[curr.age]++;
    } else {
        person[curr.age] = 1;
    }

    return person;
}, {});

console.log(output);