import React, { useState } from "react";
import Eventdata from "../API/EventApi";
import style from "./Categories.module.css";

const Categories = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");

  const knownCategories = ["Fitness", "Art", "Business", "Food & Drink", "Technology"];

  //Filter known categories
  const filterItem = (category) => {
    const filteredData = Eventdata.filter(
      (event) => event.category.toLowerCase() === category.toLowerCase()
    );
    onFilterChange(filteredData);
  };

  //Filter other categories
  const filterOther = () => {
    const filteredData = Eventdata.filter(
      (event) => !knownCategories.includes(event.category)
    );
    onFilterChange(filteredData);
  };

  //Rset function
  const resetFilter = () => {
    onFilterChange(Eventdata);
  };

//Getting user's cordinates
  const getLocation = () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => fetchCity(latitude, longitude),
        (error) => console.error("Error getting location:", error.message)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const fetchCity = async (latitude, longitude) => {
    const API_KEY = process.env.REACT_APP_LOCATION_API_KEY;
    console.log("api key",API_KEY)
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const city = data.results?.[0]?.components?.city || "";
      setLocation(city);

      // Filter events based on city
      const filteredData = Eventdata.filter(
        (event) => event.city?.toLowerCase() === city.toLowerCase()
      );
      onFilterChange(filteredData);

    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <div className={style["category-container"]}>
      <div className={style["categories"]}>
        {knownCategories.map((category) => (
          <button
            key={category}
            className={style["category-btn"]}
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        ))}
        <button className={style["category-btn"]} onClick={filterOther}>
          Other
        </button>
        <button className={style["category-btn"]} onClick={resetFilter}>
          <span className="highlight1"><i className="fa fa-refresh" aria-hidden="true"></i></span>
        </button>
        <button className={style["category-btn"]} onClick={getLocation}>
          Get Location
        </button>
      </div>

      {location && (
        <div className={style["location-info"]}>
          <i className="fa fa-location-dot" aria-hidden="true"></i>
          <span>{location}</span>
        </div>
      )}
    </div>
  );
};

export default Categories;
