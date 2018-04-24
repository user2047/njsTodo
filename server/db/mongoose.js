const mongoose = require("mongoose");

mongoose.Promse = global.Promise;

mongoose.connect("mongodb://localhost:27017/TodoApp");


module.exports = {
  mongoose
};
