import PlantListItem from "./PlantListItem";
import { plantStarterData } from "../data/plantStarterData";
import { useState } from "react";

export default function PlantList(props) {
  const [plantData, setPlantData] = useState(plantStarterData);
  const [counter, setCounter] = useState(0);

  console.log("yo yo yo I just rendered");

  const updateWateredDate = (plantId) => {
    setPlantData((prevState) => {
      const todayDate = new Date();
      const todayString = todayDate.toDateString();

      const updatedPlantData = [...prevState];

      const plantToChange = updatedPlantData.find((plant) => plant.id === plantId);
      const plantToChangeIndex = updatedPlantData.findIndex((plant) => plant.id === plantId);

      const updatedPlant = { ...plantToChange, lastWatered: todayString };

      updatedPlantData[plantToChangeIndex] = updatedPlant;

      console.log(updatedPlantData);
      return updatedPlantData;
    });
  };

  const updateWateredDateIfWeHadAnObject = (plantId) => {
    setPlantData((prevState) => {
      const todayDate = new Date();
      const todayString = todayDate.toDateString();

      const updatedPlantData = { ...prevState };
      const updatedPlant = { ...updatedPlantData[plantId], lastWatered: todayString };
      updatedPlantData[plantId] = updatedPlant;

      return updatedPlantData;
    });
  };
  // const updateWateredDate = (plantId) => {
  //   const todayDate = new Date();
  //   const todayString = todayDate.toDateString();

  //   const updatedPlantData = [...plantData];

  //   const plantToChange = updatedPlantData.find((plant) => plant.id === plantId);
  //   const plantToChangeIndex = updatedPlantData.findIndex((plant) => plant.id === plantId);

  //   const updatedPlant = { ...plantToChange, lastWatered: todayString };

  //   updatedPlantData[plantToChangeIndex] = updatedPlant;

  //   console.log(updatedPlantData);

  //   setPlantData(updatedPlantData);
  // };

  const waterAllThePlants = () => {
    const listOfIds = plantData.map((plant) => plant.id);

    for (const plantId of listOfIds) {
      updateWateredDate(plantId);
    }
  };

  // const updateWateredDate = (plantId) => { BAD
  //   const todayDate = new Date();
  //   const todayString = todayDate.toDateString();

  //   const plantToChange = plantData.find((plant) => plant.id === plantId);
  //   plantToChange.lastWatered = todayString;

  //   console.log(plantData);
  //   setPlantData(plantData);
  // };

  const parsedPlants = plantData.map((plant) => (
    <PlantListItem
      key={plant.id}
      {...plant}
      updateWateredDate={() => updateWateredDate(plant.id)}
      setCounter={setCounter}
    />
  ));
  return (
    <section>
      <h1>I AM PLANTLIST</h1>
      <button onClick={waterAllThePlants}>WATER ALL THE PLANTS</button>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      {parsedPlants}
    </section>
  );
}
