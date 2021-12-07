import "./PlantListItem.css";

export default function PlantListItem(props) {
  const { name, type, wateredOn, wateringInterval } = props;

  const today = new Date();
  const wateredDate = new Date(wateredOn);

  const differenceInDays = (today.getTime() - wateredDate.getTime()) / 86400 / 1000;

  const className = differenceInDays > wateringInterval ? "badly-watered" : "well-watered";
  return (
    <article className={className}>
      <h1>
        {name} - {type}
      </h1>
      <h2>Watered on: {wateredOn}</h2>
    </article>
  );
}
