// Writr a function which helps to achieave multiply(a)(b) and returns product of a and b.

const multiply = (a) => {
    return (b) => {
        return a * b;
    }
}

console.log(multiply(2)(3));

const add = (a) => {
    return (b) => {
        return a + b;
    }
}

console.log(add(2)(3));

/* what is currying ??

Currying is a technique used in functional programming languages like JavaScript, 
where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
*/

//Advantages : code reusability, function composition.

//Disadvantages :  increased complexity, performance overhead.







