// Design an utility which takes URL and a value for attempts which
// will attempt to make a fetch request. If on failure it tries again with
// increasing delay for number of times which user has requested.


const requestManager = (url, options, attempts) => {
    return new Promise((resolve, reject) => { 
        fetch(url, options)
            .then(resolve)
            .catch(err => {
                const isLastAttempt = attempts == 1;
                if (isLastAttempt) { 
                    return reject(err);
                }
                setTimeout(() => {
                    requestManager(url, options, attempts - 1)
                       .then(resolve)
                       .catch(reject);
                }, 3000);
        })
    })
}

requestManager('http://foo.com', {}, 3).then(response => {
    console.log(response)
}).catch(error => { 
    console.log(error);
})
