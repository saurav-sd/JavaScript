let person1 = {
    name: 'John',
    age:30
}

let showDetails = function (state,city) {
    console.log(this.name + " " + this.age + " " + state + " " + city)
}

// let showDetails2 = showDetails.bind(person1, "bihar")
// showDetails2("gaya");


Function.prototype.myBind = function (...args) {
    let obj = this;
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0],[...params, ...args2]);
    }
}

let shoDetailsMyBind = showDetails.myBind(person1, 'local')
shoDetailsMyBind('up');


// let arr = [1, 2, 3, 4, 5];

// console.log(arr.slice(1));

