const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const randomNumber = () => {
  const date = new Date();
  const first = date.getTime();
  const second = Math.round(Math.random() * 1000) / 1000;

  return first + second;
};

const todos = {
  192812: {
    id: 192812,
    name: "Make a bad pun",
    isComplete: true,
  },
  1921323812: {
    id: 1921323812,
    name: "Upload lecture content",
    isComplete: false,
  },
  19281112: {
    id: 19281112,
    name: "Drink coffee",
    isComplete: false,
  },
};

app.get("/api/todos", (req, res) => {
  res.json(todos);
});
app.put("/api/todos/:todo_id", (req, res) => {
  const { todo } = req.body;
  const { todo_id } = req.params;

  todos[todo.id] = todo;

  res.json(todos);
});
app.post("/api/todos", (req, res) => {
  // INSERT INTO .... RETURNING id

  const { todo } = req.body;
  todo.id = randomNumber();
  todos[todo.id] = todo;

  res.json(todo.id);
});
app.delete("/api/todos/:todo_id", (req, res) => {
  const { todo_id } = req.params;

  delete todos[todo_id];

  res.json(todos);
});

module.exports = app;
