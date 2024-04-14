Array.prototype.myMap = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
}

function square(x) {
    return x * x;
}

let arr =[1,2,3,4,5,6]

let mappedArr = arr.myMap(square);

// console.log(mappedArr);

// filter
Array.prototype.myFilter = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        if (cb(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

function isEven(x){
    return x%2 == 0;
}

let filterArr = arr.myFilter(isEven);

// console.log(filterArr);

// reduce

Array.prototype.myReduce = function (cb, init) {
    let sum = init;
    for (let i = 0; i < this.length; i++){
        sum = cb(sum, this[i]);
    }
    return sum;
}

function sum(x, y) {
    return x + y;
}

console.log(arr.myReduce(sum, 0));

// Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to the prototype of Person objects
Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name);
};

// Create an instance of Person
var person1 = new Person('Alice', 30);

// Call the method defined on the prototype
person1.sayHello(); // Output: Hello, my name is Alice