//non strict

// 'use strict';

// console.log(this); // empty object

function showthis() {
    console.log(this); // global object
}

// showthis();

let obj = {
    name: 'saurav',
    age: 20,
    fn: function () {
        function showthis() {
            console.log(this); 
         }
         showthis();
    }
}

// console.log(obj);

// ==================================================


// what will be logged here ?

// Task 1
function getItems() {
    console.log(this); // it will logged the global object.
}

// getItems();

// Task 2
const item = {
    title : "Food",
    getItem(){
        console.log(this); // it will logged the entire parent object.
    }
    
}

// item.getItem();

//Task 3
class Item{
    title = "ground";
    getItem() {
        console.log("this",this);
    }
}

const item1 = new Item();
item1.getItem();