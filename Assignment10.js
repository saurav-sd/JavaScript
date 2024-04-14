// Find the number of occurence of minimum value in  the list

const arr = [0,1, 2, 3, 1, 1,1, 3, 2];
const min = Math.min(...arr);
const value = arr.filter(e => e === min).length;

console.log(value);