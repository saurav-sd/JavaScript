// object = { key: value}

let obj = {
    name: "John",
    age: 30,
    city: "New York",
    isMan: true,
    movies: ["first", "second", "third", "fourth", "fifth", "sixth"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    sayHi: function () {
        console.log("Hi, my name is " );
    }    
}

//get
console.log(obj.name);
console.log(obj.age);
console.log(obj.movies[1]);

//update
console.log("obj :", obj)
obj.age = 20;
obj.isMan = false;
obj.friends = ['golu', 'gotu', 'chotu'];
console.log('---------------');
console.log("obj :", obj)

//delete
