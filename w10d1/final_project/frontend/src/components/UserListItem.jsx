export default function UserListItem(props) {
  const { name, email } = props;
  return (
    <article>
      <h1>{name}</h1>
      <h2>{email}</h2>
    </article>
  );
}
