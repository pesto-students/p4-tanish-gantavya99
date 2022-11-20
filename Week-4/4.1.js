const getNumber = (ms) => new Promise(function (resolve, reject) {
    let value = Math.random() * 1000;
    setTimeout(() => {
        if (value % 5 === 0) {
            return resolve(value)
        }
        else {
            return reject(value)
        }
    }, ms)
})
console.time()
getNumber(3000)
    .then(() => {
        // console.timeEnd();
        return console.log(`divided by 5 possible`)
    })
    
    .catch((num) => {
        console.timeEnd();
        return console.log(`non dividable by 5 value=${num}.`)
    })

    .finally(console.timeEnd());