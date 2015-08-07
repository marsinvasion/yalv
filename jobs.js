var ncj = require('node-cron-jobs');
var os = require('./os/os.js');
var logGenerate = require('./logGenerator/generate.js');

var jobCall = function(name, job){
  if('os' === name){
    job.addCallback(os.load);
    job.start();
  }else if('log' === name){
    job.addCallback(logGenerate.simulate);
    job.start();
  }
}

for(var name in ncj.jobs){
  jobCall(name,ncj.jobs[name]);
}
