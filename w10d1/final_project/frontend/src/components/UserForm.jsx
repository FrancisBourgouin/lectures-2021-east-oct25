import { useState } from "react";

export default function UserForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter the name"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter the email"
      />
      <button>Add new user</button>
    </form>
  );
}
