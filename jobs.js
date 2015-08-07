var ncj = require('node-cron-jobs');
var os = require('./os/os.js');
var jobCall = function(name, job){
  if('os' === name){
    job.addCallback(os.load);
    job.start();
  }
}

for(var name in ncj.jobs){
  jobCall(name,ncj.jobs[name]);
}
