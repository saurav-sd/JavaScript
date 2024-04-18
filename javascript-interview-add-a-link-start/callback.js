// write a asynchronous function which exicutes callback after funishing it's asynchronous task


const asyncFun = (callback) => {
    setTimeout(() => {
        callback("done");
    }, 2000);
}

asyncFun((message) => {
    console.log("callback ",message);
})