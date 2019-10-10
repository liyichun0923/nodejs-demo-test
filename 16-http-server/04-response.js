#!/usr/bin/node

var http = require ("http"),
    log = console.log;

http.createServer(function(req,res){
  log('${req.method} ${req.url} HTTP/${req.httpVersion}');
  log(req.headers);
  log();

  req.pipe(process.stdout);

  var html = ''+
 + '<!DOCTYPE html>'
 + '<html lang="en">'
 + '<head>'
 + '<meta charset="UTF-8">'
 + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
 + '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
 + '<title>Document</title>'
 + '</head>'
 + '<body>'
 + '<h1>hello world!</h1>'
 + '</body>'
 + '</html>';

  if(req.url === '/'){
    //200 ok
    res.writeHead(200,{'Content-Type':'text/html','Content-Length':Buffer.byteLength(html,'utf8')});
    res.end(html);
  }else{
    // 404 not found
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');
    res.end('error');
  }
}).listen(8080);
