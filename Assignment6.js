// Remove all the duplicates from the array.

let arr1 = [1, 1, 2, 3, 3, 3, 4, 4, 5, 6];

// bruteforce approach

let newArr = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
        if (arr1[i] === newArr[j]) {
            newArr.splice(j, 1);
        }
    }
    newArr.push(arr1[i]);
}

console.log(newArr);

// approach 2

const uniqueArr = (arr1) => {
    const res = [];
    arr1.forEach(element => {
        if (!res.includes(element)){
            res.push(element);
        }
    });
    return res;
}

console.log(uniqueArr(arr1));

// approach 3 : set

const iniqueArr2 = (arr1) => {
    return [...new Set(arr1)];
}

console.log(iniqueArr2(arr1));

// approach 4 : using reduce

const uniqueArr3 = (arr1) => {
    return arr1.reduce((acc, e) => {
        return acc.includes(e) ? acc : [...acc, e];
    }, [])
};

console.log(uniqueArr3(arr1));

// approach 5 : using filter

const uniqueArr4 = (arr1) => {
    return arr1.filter((e, i, arr) => arr.indexOf(e) === i);
};

console.log(uniqueArr4(arr1));




