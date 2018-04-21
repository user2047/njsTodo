const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
  if (err){
    return console.log("Unable to connect to mongodb server",err);
  }
  console.log("connected to MongoDB server");
  const db = client.db("TodoApp");

  db.collection("Users").insertOne({
    name:"Cameron"

  },(err,result)=>{
    if (err) {
      return console.log("Unable to insert todo",err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  // db.collection("Users").insertOne({
  //   name: "Cam",
  //   age: 21,
  //   location: 00000
  // },(err,res)=>{
  //   if (err){
  //     return console.log("Could not add user",err);
  //   }
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // })

  client.close();
});
