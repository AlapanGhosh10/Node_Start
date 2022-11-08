// // EventEmitter
// const {EventEmitter} = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('event', () => {console.log("callback")})
// eventEmitter.emit('event')

// // readFileSync
// const {readFile, readFileSync} = require('fs');
// const txt = readFileSync('./hell.txt', 'utf8')
// console.log(txt)

// // readFile with callback
// const {readFile} = require('fs');
// readFile('./hell.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// })

// // readFile with Promise
// const {readFile} = require('fs').promises;
// async function hell() {
//     const txt = await readFile('./hell.txt', 'utf8');
//     console.log(txt);
// }
// hell()