import UserListItem from "./UserListItem";

export default function UserList(props) {
  const { users } = props;

  const parsedUsers =
    Array.isArray(users) && users.map((user) => <UserListItem key={user.id} {...user} />);
  return (
    <section>
      <h1>I AM USER LIST</h1>
      {parsedUsers}
    </section>
  );
}
