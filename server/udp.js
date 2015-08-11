var dgram = require('dgram');
var dataStore = require('./dataStore.js');

var sock = dgram.createSocket('udp4');

sock.on("message", function(msg){
  dataStore.onMessage(msg);
});

sock.bind(5201);
