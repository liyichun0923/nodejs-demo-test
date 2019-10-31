#!/usr/bin/node

const http = require('http'),
      qs = require('querystring');

var isLogin;
var inputcount;

http.createServer((req, res) => {
  var data = '';

  if(typeof req.headers['cookie']==='undefined'){
    isLogin = false;
    inputcount = 1;
  }else{
    var pair = req.headers['cookie'].split('=');
    isLogin = (pair[1] === 'true');
    inputcount = Number(pair[1]) + 1;
  }

  if(req.method === 'POST' &&  req.url === '/login'){
        req.on('data',(chunk)=>{data+=chunk;});
        req.on('end',()=>{
          var account = qs.parse(data);
          
          if(account.username === 'zhangsan' && account.pwd === '123'){
            console.log('username:%s,pwd:%s',account.username,account.pwd);
            isLogin = true;
            showStatus(res);
          }else{
            showLoginError(res);
          }
        });
  }
  if(req.method === 'GET'){
    if(isLogin){
      showStatus(res);
    }else{
      showLogin(res);
    }
  }

}).listen(8080);

function showLogin(res) {
  var html = '<!DOCTYPE html>'
          +  '<html lang="en">'
          +  '<head>'
          +  '<meta charset="UTF-8">'
          + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
          +  '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
          +  '<title>登陆</title>'
          +  '</head>'
          +  '<body>'
          +  '<form action="/login" method="post">'
          +  '<input type="text" name="username" />'
          +  '<input type="pwd" name="pwd" />'
          +  '<input type="submit" value="login" />'
          +  '</form>'
          +  '</body>'
          +  '</html>';
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Length', Buffer.byteLength(html));
      res.end(html);
    
}

function showLoginError(res){
  var html = '<!DOCTYPE html>'
          +  '<html lang="en">'
          +  '<head>'
          +  '<meta charset="UTF-8">'
          + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
          +  '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
          +  '<title>登陆</title>'
          +  '</head>'
          +  '<body>'
          +  '<form action="/login" method="post">'
          +  '<input type="text" name="username" />'
          +  '<input type="pwd" name="pwd" />'
          +  '<input type="submit" value="login" />'
          +  '</form>'
          +  '<br/>'
          +  '<h5>用户名、密码错误！请重新输入！</h5>'
          +  '</body>'
          +  '</html>';
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Length', Buffer.byteLength(html));
      res.end(html);
}

function showStatus(res){
  var html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>home</title><head><body><h3>zhangsan这是您第${inputcount}次登陆</h3></body></html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Set-cookie',`inputcount=${inputcount};max-age=10000000`);
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}


