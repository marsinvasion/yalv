var MongoClient = require('mongodb').MongoClient;
var util = require('util');
var url = 'mongodb://localhost:27017/yalv';
var db;

MongoClient.connect(url, function(err, mydb) {
  if(err) throw err;
  util.log("Connected correctly to server");
  db = mydb;
});

module.exports = {
 
 insertLog:function(log, callback){

   var logCollection = db.collection('logs');

   logCollection.insert(log,function(err,result){
     if(err) return callback(err,null);
     callback(null,result);
   });
 }

}
