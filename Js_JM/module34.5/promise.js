const promise = new Promise((resolve, reject) => {
    if (false) {
        resolve('resolved')
    } else {
        reject('reject')
    }
})
promise
    .then(res => console.log(res))
    .catch(err => console.log(err))