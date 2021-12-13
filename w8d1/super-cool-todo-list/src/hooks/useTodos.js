import { useEffect, useState } from "react";
import axios from "axios";

export default function useTodos() {
  const [todos, setTodos] = useState();
  // const todoList = Object.values(todos);

  useEffect(() => {
    axios.get("/api/todos").then((res) => {
      const todoList = Object.values(res.data);
      setTodos(todoList);
    });
  }, []);

  const addNewTodo = (formData) => {
    const newTodo = {
      name: formData.name,
      isComplete: false,
    };

    axios.post("/api/todos", { todo: newTodo }).then((res) => {
      newTodo.id = res.data;
      const newTodos = [newTodo, ...todos];
      setTodos(newTodos);
    });
  };

  const updateTodo = (todoId) => {
    const newTodos = [...todos];

    const todoToChange = newTodos.find((todo) => todo.id === todoId);
    const todoToChangeIndex = newTodos.findIndex((todo) => todo.id === todoId);
    const updatedTodo = { ...todoToChange, isComplete: !todoToChange.isComplete };

    newTodos[todoToChangeIndex] = updatedTodo;

    axios.put(`/api/todos/${todoId}`, { todo: updatedTodo }).then(() => {
      setTodos(newTodos);
    });
  };

  const updateTodosIfWeHadAnObject = (todoId) => {
    const newTodos = { ...todos };

    const todoToChange = { ...newTodos[todoId] };
    const updatedTodo = { ...todoToChange, isComplete: !todoToChange.isComplete };

    newTodos[todoId] = updatedTodo;

    setTodos(newTodos);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);

    axios.delete(`/api/todos/${todoId}`).then(() => {
      setTodos(newTodos);
    });
  };

  const deleteTodoIfWeHadAnObject = (todoId) => {
    const newTodos = { ...todos };
    delete newTodos[todoId];

    setTodos(newTodos);
  };

  return { todos, addNewTodo, updateTodo, deleteTodo };
}
