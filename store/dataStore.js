var os = require('../os/os.js');

module.exports = {

  obj:{},

  onMessage:function(msg){
    var data = JSON.parse(msg);
    var key = data.request+'~'+data.api+'~'+data.func
    if('entering' === data.type){
      if(this.obj[key]){
        this.obj[key].push(data.time);
      }else{
        this.obj[key]=[data.time];
      }
    }else if('exiting' === data.type){
      if(this.obj[key]){ 
        var objTime = this.obj[key].shift();
        data.timeElapsed = new Date(data.time).getTime() - new Date(objTime);
        data.os = os.load();
	if(this.obj[key].length==0) delete this.obj[key];
        console.log(data, this.obj,JSON.stringify(this.obj).length);
      }
    }
  }

}
