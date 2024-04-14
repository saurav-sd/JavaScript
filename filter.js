let arr = [3, 4, 2, 6, 7, 8, 1];

// odd numbers

function oddNumber(x) {
    return x % 2;
}

// let output = arr.filter(oddNumber);

// let output = arr.filter((x) => x % 2 === 0);

let output = arr.filter(x => x > 4);

// console.log(output);

var peopleArray = [
    { firstName: "Alice", lastName: "Smith", age: 30 },
    { firstName: "Bob", lastName: "Johnson", age: 35 },
    { firstName: "Charlie", lastName: "Brown", age: 25 },
    { firstName: "Diana", lastName: "Garcia", age: 40 } 
];

// find the first name of the peopel whose age is less than 35.

// const res = peopleArray.filter((x) => {
//     if (x.age < 35) {
//         return x.firstName;
//     }
// }).map(x => x.firstName);

// console.log(res);

const firstnameres = peopleArray.reduce(function (res, x) { 
    if (x.age < 35) {
        res.push(x.firstName);
    }
    return res;
},[]);

console.log(firstnameres);

