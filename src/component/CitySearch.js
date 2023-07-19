import React from "react";
import { useState } from "react";

const CitySearch = ({ getAirQuality }) => {
  const [inputValue, setInputValue] = useState("");

  const HandleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const HandleSearch = (event) => {
    event.preventDefault();
    const FormattedCity = inputValue.replace(/ /g, "-");
    getAirQuality(FormattedCity);
  };

  return (
    <div>
      <form onSubmit={HandleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          onChange={HandleInputChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default CitySearch;
