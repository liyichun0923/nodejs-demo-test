#!/usr/bin/node

var Radio = require('./03-radio.js');
var station = {
  freq: '106.7',
  name: 'music radio'
};

var radio = new Radio(station);

radio.on('open',function(station){
  console.log('"%s" FM %s opened',station.name,station.freq);
  console.log('lalalalala...');
});

radio.on('open',function(station){
  console.log('hello',station);
  console.log('\neventName:',radio.eventNames());
  console.log('\nopen listener count:',radio.listenerCount('open'));
  console.log('\nopen listeners:',radio.listeners('open'));
});

radio.on('stop',function(station){
  console.log('"%s" FM %s closed',station.name,station.freq);
});

