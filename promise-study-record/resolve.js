console.log('start');

Promise.resolve()
    .then( () => {
        console.log('Step 1');
        return Promise.resolve('Hello');
    })
    .then( value => {
        console.log(value, 'world');
        return Promise.resolve(new Promise( resolve => {
            setTimeout( () => {
                resolve('Good');
            }, 2000);
        }))
    })
    .then( value => {
        console.log(value , 'evening');
        return Promise.resolve({
            then() {
                console.log(',everyone');
            }
        })
    })