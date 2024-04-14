// Write a function which get's an array and an element and returns an
// array with this element at the end.

const arr = [1, 2, 3];

const append = (arr, el) => {
    arr.push(el); // this is not completely correct implemtation because it is modifying the original array.
    return arr;
}

// correct implementation
const appendres = (arr, el) => {
    return [...arr, el];
}

// console.log(arr);
// console.log(append(arr, 4));


// write a function which will concatinate 2 arrays

// approach 1

const mergearrays = (arr1, arr2) => {
    arr1.push(...arr2);
    return arr1;
}

// const res1 = mergearrays(arr1,arr2);

// conlusion : this is not a right approach because it is mutatin the original array arr1; 

//approach 2 :

const mergearrays2 = (arr1, arr2) => {
    return arr1.concat(arr2);
}


// const arr1 = [1];
// const arr2 = [2, 3, 4];

// const res2 = mergearrays2(arr1,arr2);

//conclusion : ths concat method is not mutating the original array

// approach 3 :

const mergearrays3 = (arr1, arr2) => {
    return [...arr1, ...arr2];
}


const arr1 = [1];
const arr2 = [2, 3, 4];

const res3 = mergearrays3(arr1, arr2);
console.log(res3, arr1, arr2);


// Note : we can use multiple arguments in both the case.


