module.exports = {

  obj:{},

  onMessage:function(message){
    var data = JSON.parse(message);
    console.log(data, this.obj);
    debugger;
    var key = message.request+'~'+message.api+'~'+message.func
    if('entering' === message.type){
      this.obj[key]=message.time;
    }else if('exiting' === message.type){
      message.timeElapsed = message.time - this.obj[key];
      console.log(message);
    }
  }

}
