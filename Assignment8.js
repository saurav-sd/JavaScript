// write a function which implenents a shuffel.

// approach 1 
const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// approach 2
const shuffle1 = (arr) => {
    return arr
        .map(e => ({ sort: Math.random(), value: e }))
        .sort((a, b) => a.sort - b.sort)
        .map(c => c.value);
}

//=============================

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(shuffle1(arr));
console.log(shuffle1(arr));