import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const plantListInfo = [
    {
      id: 165464,
      name: "Rododendrum",
      type: "Tropical",
      wateredOn: "2021-12-07",
      wateringInterval: 7,
    },
    {
      id: 88548,
      name: "Venus Fly Trap",
      type: "Cosmic",
      wateredOn: "2021-01-01",
      wateringInterval: 99999999,
    },
    {
      id: 55844,
      name: "Lavender",
      type: "Plant",
      wateredOn: "2021-01-01",
      wateringInterval: 20,
    },
    {
      id: 296497,
      name: "Rose",
      type: "Flower",
      wateredOn: "2021-12-02",
      wateringInterval: 3,
    },
  ];

  const parsedPlants = plantListInfo.map((plant) => <PlantListItem key={plant.id} {...plant} />);

  return <section>{parsedPlants}</section>;
}
