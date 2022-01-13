import logo from "./logo.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState(null);

  const addUser = (formData) => {
    axios.post("/api/users", formData).then((res) => {
      setUsers([...users, res.data]);
    });
  };

  useEffect(() => {
    axios.get("/api/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="App">
      <UserList users={users} />
      <UserForm onSubmit={addUser} />
    </div>
  );
}

export default App;
