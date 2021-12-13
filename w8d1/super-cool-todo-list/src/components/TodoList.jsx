import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { todos, updateTodo, deleteTodo } = props;

  const parsedTodos =
    Array.isArray(todos) &&
    todos.map((todo) => (
      <TodoListItem
        {...{
          ...todo,
          key: todo.id,
          updateTodo: () => updateTodo(todo.id),
          deleteTodo: () => deleteTodo(todo.id),
        }}
      />
      // <TodoListItem
      //     {...todo}
      //     key = { todo.id}
      //     updateTodo = { () => updateTodo(todo.id)}
      //     deleteTodo = { () => deleteTodo(todo.id)}
      //   }}
      // />
    ));

  return <section>{parsedTodos}</section>;
}
