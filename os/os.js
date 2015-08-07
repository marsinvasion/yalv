var os = require('os');

var info = {};
info.hostname = os.hostname();
info.type=os.type();
info.platform = os.platform();
info.architecture=os.arch();
info.release=os.release();
info.uptime = os.uptime();
if(info.uptime >= 86400){
  info.uptime = info.uptime/86400+ " days";
}else if(info.uptime>=3600){
  info.uptime = info.uptime/3600 + " hours";
}else if(info.uptime>=60){
  info.uptime = info.uptime/60 + " minutes";
}else{
  info.uptime = info.uptime/1000 + " seconds";
}

var humanMem = function(mem){
  if(mem>1073741824){
    return mem/1073741824 + " GB";
  }else if(mem>1048576){
    return mem/1048576 + " MB";
  }else return mem;
}
var totalMem = os.totalmem();
info.totalMem = humanMem(os.totalmem());

module.exports.load = function(){
  console.log("******");
  info.date=Date.now();
  info.loadAverage=os.loadavg();
  info.freeMemory=humanMem(os.freemem());
  info.memoryUsed=humanMem(totalMem-os.freemem());
  console.log(info);
}


