// Design a memoization function which adds 10 to the provided value and take it from cache it it was already calculated.

const memoizeAdd = () => {
    let cache = {};

    return (value) => {
        if (value in cache) {
            console.log("fetching from cache");
            return cache[value];
        } else {
            console.log("calculating");
            cache[value] = value + 10;
            return cache[value];
        }
    }
};

const newAdd = memoizeAdd();
console.log(newAdd(9));
console.log(newAdd(9));