var bunyan = require('bunyan');

var logger = bunyan.createLogger({
  name: 'app'
});

var logStr = function(level,requestId,api,func){
  logger.debug('performance',{level:level, requestId:requestId,api:api,func:func});
}

console.log(logger.levels());
var simulate = function(){
  debugger;
  logger.info('simulating');
  logStr('entering','myuser','web server','web call');
  logStr('entering','myuser','user','getUser');
  logStr('entering','myuser','service','calculate');
  logStr('entering','myuser','db','getData');

//  setTimeout(log,3000,'exiting','myuser','web server','web call');
//  setTimeout(log,500,'exiting','myuser','user','getUser');
//  setTimeout(log,500,'exiting','myuser','service','calculate');
//  setTimeout(log,1000,'exiting','myuser','db','getData');
}

module.exports = {
  logger : logger,
  simulate: simulate
}
