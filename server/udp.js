var dgram = require('dgram');
var dataStore = require('../store/dataStore.js');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var sock = dgram.createSocket('udp4');

sock.on("message", function(buf){
  var msg = decoder.write(buf);
  //console.log("message received", msg);
  dataStore.onMessage(msg,'entering','exiting');
});

sock.bind(5201);
