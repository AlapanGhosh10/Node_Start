# Node.js
It is the most impotant skill of full-stack

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
we can just do node . to point to parent directory and run

## Know Your Runtime
Node has built in identifiers
one is console
console.log(’’)
another is global
it is used to make a variable available everywhere
global.luckynumber = ‘23’
process is a global object
it gives access to currently running node process
console.log(process.platform); // linux
console.log(process.env.USER) // grabs environment variables from server

## Events
an asynchronous event-driven JavaScript runtime
Runtime implements a thing called event loop
It pushes big operations on a seperate thread
while only the main operations take place fast in main thread
It makes application requiring higher throughput faster
Node.js is also called non-blocking
Just need to know how Events and Callbacks work
We listen to events they can come in any form
  process.on('exit', function() {
When a node process ends it emits an event 'exit'
We can listen to this event using on
then have a callback function as second argument
here ‘exit’ is EVENT
funtion(){} is CALLBACK
this is a build in event in node
