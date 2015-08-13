var os = require('../os/os.js');

module.exports = {

  obj:{},

  onMessage:function(msg){
    var data = JSON.parse(msg);
    var key = data.request+'~'+data.api+'~'+data.func
    if('entering' === data.type){
      this.obj[key]=data.time;
    }else if('exiting' === data.type){
      if(this.obj[key]){ //if old logs are loaded, entering and exiting might be called at the same time
        data.timeElapsed = new Date(data.time).getTime() - new Date(this.obj[key]).getTime();
        data.os = os.load();
        console.log(data);
        delete this.obj[key];
      }
    }
  }

}
