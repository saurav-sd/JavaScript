// what is pure function ?

// impure function

let a = 4; // dependency on external factor
function addNumbar(b) { 
    console.log("the sum is :", a + b)
}

addNumbar(6);

// pure function -> the function which returns same value for the same set of arguments.

function addNum(a, b) {
    // console.log("the sum is :", a + b) // side effect
    return a + b;
}

console.log(addNum(4, 6));