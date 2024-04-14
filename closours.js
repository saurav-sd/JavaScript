// function calculate(a, b) {
//     let res = a + b; // the scope of the res variable is just inside the function.
//     return res;
// }

// // console.log(calculate(4, 6));

// //what is lexical scope ?

// function add() {
//     let a = 4;

//     function inner() {
//         let b = 6;
//         console.log(a + b); //the child function can access the variable of parent function
//     }

//     return inner;
// }

// let fn = add();

// console.log(fn)
// fn();


//closours :

function x() {
    var i = 1;
    setTimeout(function () { 
        console.log(i);
    }, 3000)
    console.log("Hello world!");
}
// x();

// How to print the 1,2,3,4 on console one after other ?


function x() {
    
    for (var i = 1; i < 5; i++) {
        function close(i) {
            setTimeout(function () { 
                console.log(i);
            }, i * 1000)
        }
        close(i);
    }
    console.log("Hello world!");
}
x();





