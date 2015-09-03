var os = require('../os/os.js');
var db = require('../db/db.js');
var util = require('util');

var callback = function(err,result){
  if(err) return util.log(err);
  util.log("inserted",result);
 
}

module.exports = {

  obj:{},

  onMessage:function(msg,start,end){
    var data = JSON.parse(msg);
    var key = data.request+'~'+data.api+'~'+data.func
    if(start === data.type){
      if(this.obj[key]){
        this.obj[key].push(data.time);
      }else{
        this.obj[key]=[data.time];
      }
    }else if(end === data.type){
      if(this.obj[key]){ 
        var objTime = this.obj[key].shift();
        data.timeElapsed = new Date(data.time).getTime() - new Date(objTime);
        os.load(data);
        db.insertLog(data,callback);
        if(this.obj[key].length==0) delete this.obj[key];
        //console.log(data, this.obj,JSON.stringify(this.obj).length);
      }
    }
  }

}
