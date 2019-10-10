#!/usr/bin/node

const cp = require('child_process');

console.log('I am father with id:%d',process.pid);
var child = cp.fork('./02-child.js');



global.setTimeout(function(){
  console.log("bye father");
  child.sent('hahahahahhahahaahahha!');
},2000);
