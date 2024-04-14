// create a counter function which has increment and getValue functionality

const privateCounter = () => {
    let count = 0;
    return {
        increment: function(){
            count++;
        },
        getValue: function(){
            return count;
        }
    }
}

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

//================================================

const privateSecrate = () => {
    const secrate = "foo";

    return () => secrate;
}

const getSecrate = privateSecrate();;
console.log(getSecrate());

