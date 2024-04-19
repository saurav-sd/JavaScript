// 1. Design a function which returns a fibonacci sequence value

// 0 , 1, 1 , 2 , 3 , 4 , 5 , 6 , 7 .....;

// Iterative approach
const fib = (num) => {
    let a = 0, b = 1;
    for (let i = 0; i <= num; i++) {
        console.log(a );
        c = a + b;
        a = b;
        b = c;
    }
}

// recurssive approach

const fib2 = (num) => {
    if (num <= 1) {
        return num;
    } else {
        return fib2(num - 1) + fib2(num - 2);
    }
}

// console.log(fib2(10));

// write a function co chet the string is a palindrome.

const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}

// console.log(isPalindrome('madam'));

// Check Anagram

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    if (lowerStr1 === lowerStr2) return false;

    const sortedStr1 = lowerStr1.split('').sort().join('');
    const sortedStr2 = lowerStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// console.log(isAnagram('anagram', 'nagaram'));

// write a function which countes vowels in a string

const findVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    // let count = 0;
    // for (let chat of str.toLowerCase()) {
    //     if (vowels.includes(chat)) {
    //         count++;
    //     }
    // }
    // return count;

    // using reduce.

    return str.toLowerCase().split('').reduce((acc, curr) => {
        if (vowels.includes(curr)) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
}

console.log(findVowels('madam'));