# Node.js

It is the most impotant skill of full-stack

Deno after Node

## What is Node.js

It is not a programming language

But a runtime that allows JS to run on a server

We use and url that points to our server

When a request is revcieved

node handles the request and read a file from server file system

Then respond back to the user so they can view the HTML in browser

## How to install Node

two commands from github to install nvm

It is used to install node and shift versions

nvm install 12.16.3

nvm use 12.16.3 

## Hello World

Have fun in REPL mode → Read Eval Print Loop

node 

ctrl C x 2 times to exit repl mode

node index.js to run file

as it is just one index.js file

we can just do ***node .*** to point to parent directory and run

## Know Your Runtime

Node has built in identifiers

one is ***console***

console.log(’’)

another is ***global***

it is used to make a variable available everywhere

global.luckynumber = ‘23’

***process*** is a global object

it gives access to currently running node process

console.log(process.platform); // linux

console.log(process.env.USER)  // grabs environment  variables from server

## Events

an asynchronous event-driven JavaScript runtime

Runtime implements a thing called event loop

It pushes big operations on a seperate thread

while only the main operations take place fast in main thread

It makes application requiring higher throughput faster

Node.js is also called non-blocking

Just need to know how ***Events*** and ***Callbacks*** work

We listen to events they can come in any form

```jsx
process.on('exit', function() {
```

When a node process ends it emits an event 'exit'

We can listen to this event using on

then have a callback function as second argument

here ‘exit’ is **EVENT**

funtion(){} is **CALLBACK**

this is a build in event in node

### Creating own Event

import EventEmitter from events module

**const {EventEmitter} = require(’events’);**

We can create custom eventemitter by instantiating the class

**const eventEmitter = new EventEmitter();**

then we create a callback for a selfmade event

**eventEmitter.on(’self’, () ⇒ { console.log(’a’)} )**

Now to emit the event

**eventEmitter.emit(’self’)**

```jsx
const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('abc', () => {console.log("aa")})
eventEmitter.emit('abc')
eventEmitter.emit('abc')
```

Thie EventDriven style of programming is useful in cpu intensive programs

## File System

Node has a built in file system module called ***fs***

Can read/write/delete files in file system in a blocking or non-blocking way

We import two functions readFile and readFileSync from fs module

**const {readFile, readFileSync} = require(’fs’);**

When there is the word sync it means blocking

***SYNC === BLOCKING***

It means it has to finish its works before any of other code can run

### Mrthod 1

Now readfile using filesync, mention the encoding utf8

**const txt = readFileSync(’./hello.txt’, ‘utf8’);**

print the text in text file

**console.log(txt)**

**console.log(’do this ASAP’);**

Output is:

hello this is from txt file
do this ASAP

The second console log won’t run until the file is read

This happens due to blocking

### Method 2

We can make it non-blocking by refactoring readfile to a callback

here we can access error object if the operation fails

**readFile(’./hello.txt’, ‘utf8’, (err, txt) ⇒ {**

**console.log(txt)**

**});**

**console.log(’do this ASAP’)**

Output:

do this ASAP
hello this is from txt file

Here the second line is printed first

then the first line after the file was read

### Method 3

There is another way using promises

It is also asynchronous and non-blocking

It produces cleaner code compared to callback

Here we import readFile from promises namespace

**const{ readFile } = require('fs').promises;**

this gives a function that returns a promise when called

 in node v 14.3 we can resolve the promise at the top of the script

using TOP LEVEL AWAIT

**const file = await readFile(’./hello.txt’, ‘utf8’);**

But in v 12 we have to wrap this in async function

**async function hello () {**

**const file = await readFile(’./hello.txt’, ‘utf8’);**

**}**

This async function makes the code more readable 

as we may have multiple async functions

```jsx
// Reading txt file Method 1 (Blocking) 
const{readFile, readFileSync} = require('fs');
const txt = readFileSync('./hello.txt', 'utf8')
console.log(txt)
console.log("Normal Text")

// Reading txt file Method 2 (Non-Blocking)
const {readFile, readFileSync} = require('fs');
readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
})
console.log("Normal Text")

// Reading txt file Method 3 using Promises (Asynchronous and Non-blocking)
const{ readFile } = require('fs').promises;
async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
    console.log(file)
}
hello()
console.log("Normal Text")
```

## Modules and NPM

Module is nothing but a javascript file that exports its code

Node has a bunch of builtin modules such as require, events and many more

The traditional way to import a module is **require()**

While in ES modules it is **import/export** 

### Creating own Modules

my-module.js

create an object with reference **module.exports**

**module.exports = {**

**science: ‘bad’**

**}**

Now in main index.js

**const myModule = require('./my-module');**

**console.log(myModule)**

### Using Someone else’s Modules

It is primarily done via npm(Node Package Manager)

npm can be used to install remote packages to use in our own code

**npm init -y**

It creates a package.json file in the root 

It contains metadata abour the project

But most importantly keeps track of the dependencies we use here

**Express** is a minimal web application framework

It is one of the most popular 3rd party node module

Command to install it

**npm install express**

This added express in dependencies of package.json file

 This dependence object helps us to maintain multiple dependencies in a project

and reinstalls them all at once in a different system

the actual raw module is in node_modules directory

*Do not touch **node_modules***

We do not and do not have to write code here

because package.json controls how this directory is built

fetches remote packages saves the source code here 

## Building the Server

first we import Express

Our server will live on a url

When an user sends this url as a request in browser

the server will respond with some HTML

First we create an instance of express app

**const app = express();**

Express app helps use to create different URLs and endpoints 

that users can navigate to in browser

Then we define code for the server to handle those requests

**app.get()**

HTTP requests

requests to get a data from server not to update or change anything

First argument is the url, feel free to make any url e.g- /foo.bar

second argument is callback funtion

**app.get(’/’, (request, response) ⇒ {});**

We can aassume every request to this url as an event and

we handle the event with this function

Express provides us two parameters to make use of

**Request** → User’s Incoming Data

**Response** → My Outgoing Data

*Now create a simple HTML page (home.html)*

Then import node files from node file system modules

```jsx
const express = require('express');
const { readFile } = require('fs');
const { request } = require('http');
const app = express();
app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if(err) {
            response.status(500).send('Out of Order')
        }
        response.send(html)
    })
})
```

Now we just have to tell Express app to start listening to incoming requests

We do that by defining a port which will normally come from a Node environment variable

we call app.listen with the port and when it starts we console log that app is available at a location

**app.listen(process.env.PORT || 3000, () ⇒ console.log(’Available at htt://localhost:30’))**

The go and run the code node .

## Using Promises

As the app grows callbacks can create a problem

as there would be multiple and nested callbacks (*Callback Hell*)

Promises can resolve this problem

instead of importing readFile from fs we import it from promises

```jsx
const { response } = require('express');
const express = require('express');
const { readFile } = require('fs').promises;
const app = express();
app.get('/', async(request, response) => {
    response.send(await readFile('./home.html', 'utf8'));
})
app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))
```

## Deploying to Cloud

There are many ways

But an easy and free way is Google App Engine

Create GCP account

and install google cloud command tools installed on system

The create an app.yaml file in root

This file is used to configure cloud server

we need to specify the runtime of nodejs version 12

**runtime: nodejs12**

AppEngine will run the code by looking at package.json file

for a start script i.e. “start”: ...

So now we define start script that runs node . the current working directory to start express app

**“scripts”: {**

**“start”: “node .”**

**}**

The goto command line and

**gcloud app deploy**

Then it will take a minute and provide an url to access app publicly on the web
