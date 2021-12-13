import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import useTodos from "./hooks/useTodos";

import "./App.css";

function App() {
  const { todos, addNewTodo, updateTodo, deleteTodo } = useTodos();
  return (
    <div className="App">
      <Header />
      <TodoForm {...{ onSubmit: addNewTodo }} />
      {todos && <TodoList {...{ todos, updateTodo, deleteTodo }} />}
      {/* <TodoList todos={todos} /> */}
    </div>
  );
}

export default App;
