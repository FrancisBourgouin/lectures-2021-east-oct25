export default function PlantForm(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [wateringInterval, setWateringInterval] = useState("");

  return (
    <form>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <input
        type="text"
        name="type"
        value={type}
        onChange={(event) => setType(event.target.value)}
      ></input>
      <input
        type="text"
        name="wateringInterval"
        value={wateringInterval}
        onChange={(event) => setWateringInterval(event.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
