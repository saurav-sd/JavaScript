// array declear
let arr = [];
arr = [1,2,3,4,5,6,7,8,9]
console.log(arr);
console.log(arr.length);

//print all the elements of an array
// let i = 0;
// while (i < arr.length) {
//     console.log("element at index", i , "is", arr[i]);
//     i++;
// }

arr.push('last'); //to add the element to the end of the array
arr.unshift('first'); //to add the element to the beginning of the array
console.log(arr);

arr.pop(); //to remove the element from the end of the array
arr.shift(); //remove the element from the beginning of the array

console.log(arr);

let partOfArray =  arr.slice(0, 2); //to remove the element
console.log(partOfArray);

arr.splice(0, 2); //remove the element from the beginning of the array
console.log(arr);