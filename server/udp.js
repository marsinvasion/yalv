var dgram = require('dgram');
var dataStore = require('../store/dataStore.js');

var sock = dgram.createSocket('udp4');

sock.on("message", function(msg){
  dataStore.onMessage(msg);
});

sock.bind(5201);
