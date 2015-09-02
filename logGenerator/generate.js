var bunyan = require('bunyan');
var crypto = require('crypto');

var logger = bunyan.createLogger({
  name: 'app',
  streams: [{
    level:'info',
    path:'app.log'
  }]
});

var logStr = function(type,request,api,func){
  if(bunyan.INFO === logger.levels(0)){
    logger.info({type:type, request:request,api:api,func:func});
  }
}

var simulate = function(){
  var reqId = crypto.randomBytes(10).toString('hex');
  logStr('entering',reqId,'web server','web call');
  logStr('entering',reqId,'user','getUser');
  logStr('entering',reqId,'service','setup calculation');
  logStr('entering',reqId,'service','calculate');
  logStr('entering',reqId,'service','calculate');//simulate loop
  logStr('entering',reqId,'db','getUser');
  logStr('entering',reqId,'db','getData');

  setTimeout(logStr,Math.random() * 10000,'exiting',reqId,'web server','web call');
  setTimeout(logStr,Math.random() * 1000,'exiting',reqId,'user','getUser');
  setTimeout(logStr,Math.random() * 2000,'exiting',reqId,'service','setup calculation');
  setTimeout(logStr,Math.random() * 2000,'exiting',reqId,'service','calculate');
  setTimeout(logStr,Math.random() * 2000,'exiting',reqId,'service','calculate');
  setTimeout(logStr,Math.random() * 5000,'exiting',reqId,'db','getData');
  setTimeout(logStr,Math.random() * 1000,'exiting',reqId,'db','getUser');
}

module.exports = {
  logger : logger,
  simulate: simulate
}
