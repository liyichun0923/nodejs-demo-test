#!/usr/bin/node

const GreenStream = require('./04-green-stream'),
      stdin   =process.stdin,
      stdout = process.stdout;

var g = new GreenStream;

stdin.resume;

stdout.pipe(g);
