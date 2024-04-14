//imperative way

const num = 5;

const numsquare = num * num;

if (numsquare % 2 == 0) {
    console.log(numsquare + " is even");
} else {
    console.log(numsquare + " is odd");
}

//Declerative

const isSqare = (x) => ((x * x) % 2 == 0 ? true : false);

console.log(isSqare(3));