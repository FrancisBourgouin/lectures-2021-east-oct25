import axios from "axios";
import { useEffect, useState } from "react";
import CityForm from "./CityForm";

// 09fd719b4b698ec0260e424f83378e3d
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function Weather(props) {
  // const [weatherDataCityThingy, setWeatherDataCityThingy] = useState({
  //   currentCity:"",
  //   weatherData:null
  // })

  const [currentCity, setCurrentCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataList, setWeatherDataList] = useState([1, 2, 3]);

  useEffect(() => {
    if (currentCity) {
      const weatherKey = "09fd719b4b698ec0260e424f83378e3d";
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${weatherKey}`)
        .then((res) => setWeatherData(res.data));
    }
  }, [currentCity]);

  useEffect(() => {
    if (currentCity) {
      const weatherKey = "09fd719b4b698ec0260e424f83378e3d";
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${weatherKey}`)
        .then((res) => setWeatherDataList((prevState) => [...prevState, res.data]));
      // .then((res) => setWeatherDataList([...weatherDataList, res.data]));
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=Puvirnituq&appid=${weatherKey}`)
        .then((res) => setWeatherDataList((prevState) => [...prevState, res.data]));
      // .then((res) => setWeatherDataList([...weatherDataList, res.data]));
    }
  }, [currentCity]);

  useEffect(() => {
    const bob = async () => {
      const lala = await 5;

      return lala;
    };
    bob();
  });

  return (
    <section>
      <h1>Current Temp in Cities</h1>
      {weatherData && (
        <h1>
          Temp in {currentCity} is {weatherData.main.temp}K
        </h1>
      )}
      <CityForm onSubmit={(formData) => setCurrentCity(formData.city)} />
    </section>
  );
}
