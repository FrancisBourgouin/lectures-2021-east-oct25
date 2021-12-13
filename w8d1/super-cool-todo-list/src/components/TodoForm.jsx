import { useState } from "react";

export default function TodoForm(props) {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newFormData = { ...formData };
    newFormData[name] = value;

    // const newFormData = {...formData, [name]:value};

    setFormData(newFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter task!"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      <button type="submit">Add task to list</button>
    </form>
  );
}
