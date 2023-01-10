var mongoose = require("mongoose");
let todosSchema = mongoose.Schema({
  name: String,
});

let todos = mongoose.model("todos", todosSchema, "todos");
module.exports = todos;
