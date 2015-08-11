var dgram = require('dgram');

var sock = dgram.createSocket('udp4');

sock.on("message", function(msg){
  console.log("message recieved: "+msg);
});

sock.bind(5201);
