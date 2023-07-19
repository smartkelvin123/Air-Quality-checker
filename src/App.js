import React from "react";
import "./App.css";
import { useState } from "react";
import CitySearch from "./component/CitySearch";

const App = () => {
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);
  const getAirQuality = async (city) => {
    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_API_TOKEN}`
      );
      const data = await response.json();
      console.log("data", data);
      if (response.ok && data.status === "ok") {
        setAirQualityData(data);
        setError(null);
      } else {
        setError("check another city");
        setAirQualityData(null);
      }
    } catch (error) {
      console.error("network very bad", error);
      setError("network very bad");
      setAirQualityData(null);
    }
  };
  return (
    <div className="App">
      <h1>Air Quality Index checker</h1>
      <CitySearch getAirQuality={getAirQuality} />
    </div>
  );
};

export default App;
