const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);

// fs.readFile('./1.txt', (err, data) => {
//     console.log(data.toString());
// })

// function readFile(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, (err, data) => {
//             if(err) {
//                 reject(err);
//                 return;
//             }
//             resolve(data);
//         });
//     });
// }

// readFile('./1.txt').then((data) => {
//     console.log(data.toString())
// }).catch(e => {
//     console.log(e)
// });

// function* a(s) {
//     yield console.log(s + 1);

//     yield console.log(s + 2);
// }

// const b = a(5);

// setInterval(_ => {
//     b.next();
// }, 2000);

async function rf() {
    try {
        const data = await readFile('./1.txt');
        console.log(data.toString());
    } catch (e) {
        console.log(e);
    }
}

rf();