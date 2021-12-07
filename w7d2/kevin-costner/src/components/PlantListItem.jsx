export default function PlantListItem(props) {
  const { name, type, wateredOn } = props;

  return (
    <article>
      <h1>
        {name.toUpperCase()} - {type}
      </h1>
      <h2>{wateredOn}</h2>
    </article>
  );
}
