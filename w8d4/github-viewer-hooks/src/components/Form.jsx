import { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({
    username: "",
    repo: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Repository"
        name="repo"
        value={formData.repo}
        onChange={handleChange}
      />
      <button type="submit">Search!</button>
    </form>
  );
}
