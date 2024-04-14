// document.getElementById("click-me").addEventListener("click", function xyz() { console.log("click") })

// the below code fragment can be found in:

function a() {
    // console.log("hello world");
}
a();
// console.log("hello world2");


//callback function

function fetchData(callback) {
    setTimeout(function () {
        const data = "data....";
        callback(data);
    }, 2000);
}

function getData(data) {
    // console.log("data" + data);
}

fetchData(getData);

//function decleration and function expression

fun();
function fun() {
    console.log("hello world");
}

// funexp(); error

var funexp = function () {
    console.log("hello world2");
}

funexp();