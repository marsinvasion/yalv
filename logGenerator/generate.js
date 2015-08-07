var winston = require('winston');
var customLevels =  {
  levels: {
    entering: 0,
    exiting: 0
  },
  colors: {
    entering: 'blue',
    exiting: 'red'
  }
};

var log = new (winston.Logger)({
  levels:customLevels,
  transports: [
    new (winston.transports.Console)({level: 'warn'}),
    new (winston.transports.File)({filename: 'app.log'})
  ]

});

var log = function(logLevel,requestId,api,func){
  winston.log(logLevel, 'request_id='+requestId, 'api='+api, 'func='+func);
}

module.exports.simulate = function(){
  log('entering','myuser','web server','web call');
  log('entering','myuser','user','getUser');
  log('entering','myuser','service','calculate');
  log('entering','myuser','db','getData');

  setTimeout(log,3000,'exiting','myuser','web server','web call');
  setTimeout(log,500,'exiting','myuser','user','getUser');
  setTimeout(log,500,'exiting','myuser','service','calculate');
  setTimeout(log,1000,'exiting','myuser','db','getData');
}
