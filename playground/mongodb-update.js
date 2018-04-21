const {MongoClient, ObjectID} = require("mongodb");

var url ="mongodb://localhost:27017/TodoApp"

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect(url,(err,client)=>{
  if (err){
    return console.log("Unable to connect to mongodb server",err);
  }
  console.log("connected to MongoDB server");
  const db = client.db("TodoApp");

  db.collection("Users").findOneAndUpdate({name:"Cameron"},{name:"Bob"});


  client.close();
});
