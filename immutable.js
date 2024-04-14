const person1 = {
    name: "Lenovo",
    age: 25,
    city: "New York"
};

const person2 = {...person1} 

person2.name = "John";

console.log(person1);
console.log(person2);
