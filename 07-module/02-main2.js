#!/usr/bin/node

var circle = require('./02-export-function.js');

console.log(circle);

console.log('area:',circle(20).area());

console.log('circumference:',circle(20).circumference());
