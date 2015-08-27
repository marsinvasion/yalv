var MongoClient = require('mongodb').MongoClient;
var util = require('util');
var url = 'mongodb://localhost:27017/yamf';
var db;

MongoClient.connect(url, function(err, mydb) {
  if(err) throw err;
  util.log("Connected correctly to server");
  db = mydb;
});

module.exports = {
  

}
