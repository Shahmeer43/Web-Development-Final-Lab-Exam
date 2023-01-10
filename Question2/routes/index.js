var express = require("express");
var todosModel = require("../models/todosModel");
var router = express.Router();

router.get("/", async function (req, res, next) {
  let todos = await todosModel.find();
  console.log(todos);
  res.render("index", { todos: todos });
});
router.get("/addTodos", async function (req, res, next) {
  // let products = await todosModel.find();

  res.render("AddTodos");
});

router.post("/addTodos", async function (req, res, next) {
  let todos = new todosModel();
  todos.name = req.body.todos;
  await todos.save();
  res.redirect("/");
});

router.get("/delete/:id", async function (req, res, next) {
  let todos = await todosModel.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

router.get("/edit/:id", async function (req, res, next) {
  let todos = await todosModel.findById(req.params.id);
  res.render("EditToDoList", { todos });
});

router.post("/edit/:id", async function (req, res, next) {
  let todos = await todosModel.findById(req.params.id);
  todos.name = req.body.todos;
  await todos.save();
  res.redirect("/");
});

module.exports = router;
