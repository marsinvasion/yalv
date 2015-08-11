module.exports = {

  obj:{},

  onMessage:function(msg){
    var data = JSON.parse(msg);
    var key = data.request+'~'+data.api+'~'+data.func
    if('entering' === data.type){
      this.obj[key]=data.time;
    }else if('exiting' === data.type){
      data.timeElapsed = new Date(data.time).getTime() - new Date(this.obj[key]).getTime();
      console.log(data);
    }
  }

}
