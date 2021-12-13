export default function TodoListItem(props) {
  const { name, isComplete, deleteTodo, updateTodo } = props;

  return (
    <article className={isComplete ? `complete` : "incomplete"}>
      <h1>{name}</h1>
      {!isComplete && <button onClick={updateTodo}>Complete!</button>}
      {isComplete && <button onClick={updateTodo}>Incomplete!</button>}
      {isComplete && <button onClick={deleteTodo}>Delete!</button>}
    </article>
  );
}
