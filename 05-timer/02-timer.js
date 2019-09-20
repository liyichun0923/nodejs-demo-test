#!/usr/bin/node

console.log('start...');

setInterval(loop,500);

function loop()
{
  console.log('I will loop forever!');
;}


//取消定时器（三种）
//var timeID = setInterval(loop,500);
//setTimeout(function(){
//  clearInterval(timeID);
//},3000);
//
//
//
//
