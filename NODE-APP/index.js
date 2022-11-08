// // EventEmitter
// const {EventEmitter} = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('abc', () => {console.log("aa")})
// eventEmitter.emit('abc')
// eventEmitter.emit('abc')

// // Reading txt file Method 1 (Blocking) 
// const{readFile, readFileSync} = require('fs');
// const txt = readFileSync('./hello.txt', 'utf8')
// console.log(txt)
// console.log("Normal Text")

// // Reading txt file Method 2 (Non-Blocking)
// const {readFile, readFileSync} = require('fs');
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt);
// })
// console.log("Normal Text")

// // Reading txt file Method 3 using Promises (Asynchronous and Non-blocking)
// const{ readFile } = require('fs').promises;
// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
//     console.log(file)
// }
// hello()
// console.log("Normal Text")

// // Importing own modules
// const myModule = require('./my-module');
// console.log(myModule)

// // Building the Server
// const express = require('express');
// const { readFile } = require('fs');
// const { request } = require('http');
// const app = express();
// app.get('/', (request, response) => {
//     readFile('./home.html', 'utf8', (err, html) => {
//         if(err) {
//             response.status(500).send('Out of Order')
//         }
//         response.send(html)
//     })
// })
// app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))

// Building Server with Promises
const { response } = require('express');
const express = require('express');
const { readFile } = require('fs').promises;
const app = express();
app.get('/', async(request, response) => {
    response.send(await readFile('./home.html', 'utf8'));
})
app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))