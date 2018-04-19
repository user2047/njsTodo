const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
  if (err){
    return console.log("Unable to connect to mongodb server",err);
  }
  console.log("connected to MongoDB server");
  const db = client.db("TodoApp");

  // db.collection("Todos").deleteMany({text:"Eat Lunch"}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection("Todos").deleteOne({text:"Eat Lunch"}).then((result)=>{
  //   console.log(result);
  // });


  db.collection("Todos").findOneAndDelete({text:"Eat Lunch"}).then((result)=>{
    console.log(result);
  });



  client.close();
});
