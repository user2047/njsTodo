const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
  if (err){
    return console.log("Unable to connect to mongodb server",err);
  }
  console.log("connected to MongoDB server");
  const db = client.db("TodoApp");

  // db.collection("Todos").find({_id: new ObjectID("5ad7b6173a462c2d54b71873")}).toArray().then((documents)=>{
  //   console.log("Todos");
  //   console.log(JSON.stringify(documents,undefined,2));
  //
  // },(err)=>{
  //   console.log("Unable to fetch Todos",err);
  // });

  // db.collection("Todos").find().count().then((count)=>{
  //   console.log("Todos",count);
  //
  // },(err)=>{
  //   console.log("Unable to fetch Todos",err);
  // });

  db.collection("Todos").find().toArray().then((docs)=>{
    console.log("Todos");
    console.log(JSON.stringify(docs,undefined,2));

  },(err)=>{
    console.log("Unable to fetch Todos",err);
  });

  db.collection("Users").find().toArray().then((docs)=>{
    console.log("Users");
    console.log(JSON.stringify(docs,undefined,2));

  },(err)=>{
    console.log("Unable to fetch Todos",err);
  });


  client.close();
});
