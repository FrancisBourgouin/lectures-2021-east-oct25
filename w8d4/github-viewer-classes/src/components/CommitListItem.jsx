export default function CommitListItem(props) {
  const { name, message } = props;
  return (
    <div>
      <h1>
        {name} - {message}
      </h1>
    </div>
  );
}
