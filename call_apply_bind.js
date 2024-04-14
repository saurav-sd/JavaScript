//function borowing

//global function
let fun =  function (state,city) {
    console.log(this.name + ' is', this.age + ' year old lives in state ' + state,' and city ' + city);
}

let person1 = {
    name: 'manu',
    age: '40',
}

// person1.fun();

let person2 = {
    name: 'kashi',
    age:'30'
}

// person1.fun.call(person2); // function borowing

// fun.call(person1, 'maharashtra','mumbai')
// fun.call(person2,'maharashtra','pune')

// fun.apply(person1, ['maharashtra', 'mumbai'])

let showBind = fun.bind(person1, 'noida', 'delhi')
console.log(showBind);

//if we have tp pass 