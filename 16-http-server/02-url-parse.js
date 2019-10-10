#!/usr/bin/node

var http = require ("http"),
    url = require('url'),
    qs = require('querystring'),
    log = console.log;

http.createServer((req,res)=>{
  log('request URL:',req.url);

  //var addr = url.parse(req.url);
  var addr = url.parse('http://wangding:1234@www.baidu.com:8080/a/b/c?age=208color=green#/def/efg');

  log('protocol:',addr.protocol);
  log('auth:',addr.auth);
  log('username:',addr.usernmae);
  log('password:',addr.password);
  log('host:',addr.host);
  log('port:',addr.port);
  log('path-name:',addr.pathname);
  log('path parse:',addr.pathname.split('/'));
  log('query string:',addr.query);
  log('qs parse:',qs.parse(addr.query));
  log('hash:',addr.hash);
    
  res.end("OK!");
}).listen(8080);
