var bunyan = require('bunyan');

var logger = bunyan.createLogger({
  name: 'app',
  streams: [{
    level:'info',
    path:'app.log'
  }]
});

var logStr = function(type,requestId,api,func){
  logger.info({type:type, requestId:requestId,api:api,func:func});
}

var simulate = function(){
  logStr('entering','myuser','web server','web call');
  logStr('entering','myuser','user','getUser');
  logStr('entering','myuser','service','calculate');
  logStr('entering','myuser','db','getData');

  setTimeout(logStr,Math.random() * 1000,'exiting','myuser','web server','web call');
  setTimeout(logStr,Math.random() * 1000,'exiting','myuser','user','getUser');
  setTimeout(logStr,Math.random() * 1000,'exiting','myuser','service','calculate');
  setTimeout(logStr,Math.random() * 1000,'exiting','myuser','db','getData');
}

module.exports = {
  logger : logger,
  simulate: simulate
}
