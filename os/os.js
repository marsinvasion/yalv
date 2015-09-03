var os = require('os');


var humanMem = function(mem){
  if(mem>1073741824){
    return mem/1073741824 + " GB";
  }else if(mem>1048576){
    return mem/1048576 + " MB";
  }else return mem;
}
var totalMem = os.totalmem();

module.exports.load = function(data){
  data.hostname = os.hostname();
  data.type=os.type();
  data.platform = os.platform();
  data.arch=os.arch();
  data.release=os.release();
  data.uptime = os.uptime();
  if(data.uptime >= 86400){
    data.uptime = data.uptime/86400+ " days";
  }else if(data.uptime>=3600){
    data.uptime = data.uptime/3600 + " hours";
  }else if(data.uptime>=60){
    data.uptime = data.uptime/60 + " minutes";
  }else{
    data.uptime = data.uptime/1000 + " seconds";
  }
  data.date=Date.now();
  data.loadAverage=os.loadavg();
  data.totalMem = humanMem(os.totalmem());
  data.freeMemory=humanMem(os.freemem());
  data.memoryUsed=humanMem(totalMem-os.freemem());
}


