import { storiesOf } from "@storybook/react";
import PlantListItem from "../components/PlantListItem";

const wellWateredPlant = {
  name: "Venus Fly Trap",
  type: "Cosmic",
  wateredOn: "2021-01-01",
  wateringInterval: 99999999,
};

const badlyWateredPlant = {
  name: "Lavender",
  type: "Plant",
  wateredOn: "2021-05-01",
  wateringInterval: 20,
};

storiesOf("PlantListItem", module)
  .add("Well watered", () => <PlantListItem {...wellWateredPlant} />)
  .add("Badly watered", () => <PlantListItem {...badlyWateredPlant} />);
