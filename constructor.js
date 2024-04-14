function car(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;

    this.driver = function () {
        console.log("I am driving",this.brand );
    }

}

let car1 = new car('tata', 'maruti', 'white');

console.log(car1);
console.log(car1.driver())