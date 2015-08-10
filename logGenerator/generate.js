var bunyan = require('bunyan');

var logger = bunyan.createLogger({
  name: 'app',
  streams: [{
    level:'info',
    path:'app.log'
  }]
});

var logStr = function(level,requestId,api,func){
  logger.info('performance',{level:level, requestId:requestId,api:api,func:func});
}

var simulate = function(){
  logStr('entering','myuser','web server','web call');
  logStr('entering','myuser','user','getUser');
  logStr('entering','myuser','service','calculate');
  logStr('entering','myuser','db','getData');

  setTimeout(logStr,3000,'exiting','myuser','web server','web call');
  setTimeout(logStr,500,'exiting','myuser','user','getUser');
  setTimeout(logStr,500,'exiting','myuser','service','calculate');
  setTimeout(logStr,1000,'exiting','myuser','db','getData');
}

module.exports = {
  logger : logger,
  simulate: simulate
}
