const {mongoose} = require("./../server/db/mongoose")
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user")
var id = "5ae08d4d94b0d95ac6f170fd"

var mytodo = new Todo({
  text: "Complete Something"
});
mytodo.save();


Todo.find().then((todos)=>{
  console.log("All Todos: ",todos);
});


Todo.find({_id: id}).then((todos)=>{
  console.log("Todos: ",todos);
});

Todo.findOne({_id: id}).then((todo)=>{
  console.log("Todo: ",todo);
});


Todo.findById(id).then((todo)=>{
  console.log("Todo By Id: ",todo);
}).catch((e)=>{console.log(e);});

User.findById(id).then((user)=>{
  if (!user){
    return console.log("user not found");
  }

  console.log("User By Id: ",user);
},(error)=>{console.log(error);}).catch((error)=>{console.log(error)});
