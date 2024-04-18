// create a promis function to be able to use callback function via promiss approach.

const asyncFunc = (callback) => {
    setTimeout(() => {
        callback("done");
    }, 3000);
}

const promisifyAsyncFunc = () => {
    return new Promise((resolve, reject) => {
        asyncFunc((data) => {
            resolve(data);
        });
    });
};

promisifyAsyncFunc().then((result) => {
    console.log(result);
})