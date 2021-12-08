export default function PlantListItem(props) {
  const { name, type, lastWatered, updateWateredDate, setCounter } = props;
  return (
    <article>
      <h1>
        {name} - {type}
      </h1>
      <h2>Last watered on: {lastWatered}</h2>
      <button onClick={updateWateredDate}>Water the plant!</button>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Plus one to the counter
      </button>
    </article>
  );
}
