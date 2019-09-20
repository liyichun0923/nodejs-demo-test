#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2] || __filename,
      dst = process.argv[3];

fs.renameSync(src,dst);


