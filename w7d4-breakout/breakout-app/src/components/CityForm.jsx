import { useState } from "react";

export default function CityForm(props) {
  const [formData, setFormData] = useState({
    city: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch weather with city something
    props.onSubmit(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

    // const newFormData = {...formData}
    // newFormData[name] = value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Enter city name"
        onChange={handleChange}
        value={formData.city}
      />
      <button type="submit">Fetch Weather</button>
    </form>
  );
}
