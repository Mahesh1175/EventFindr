import React, { useState } from 'react';
import Eventdata from './API/EventApi';
import Card from './Card/Card';
import Categories from './Categories/Categories';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./style.css";

const Main = () => {

  const [eventData, setEventData] = useState(Eventdata);
  const [searchData, setSearchData] = useState("");

  // Function to handle search
  const handleSearch = () => {
    if (searchData.trim() === "") {
      alert("Please enter a search term!");
      return;
    }

    //filtering the data
    const filteredData = Eventdata.filter((curElem) => 
      curElem.city.toLowerCase() === searchData.toLowerCase() ||
      curElem.category.toLowerCase() === searchData.toLowerCase()
    );

    if (filteredData.length > 0) {
      setEventData(filteredData);
    } else {
      alert(`No events found for "${searchData}"!`);
    }
 
    setSearchData(""); 
  };

  // Handle category filtering from categories component
  const handleFilterChange = (filteredEvents) => {
    setEventData(filteredEvents);
  };


  return (
    <>
      {/* Events search field */}
      <div className='search-field'>
        <input
          className="input"
          type="search"
          placeholder="Search events"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button className='search-btn' onClick={handleSearch}>Search</button>
      </div>
       
      {/* Child components */}
      
      <Categories onFilterChange={handleFilterChange} />

      {/* Events card */}
      <div className="cards">
        <Card eventData={eventData} />
      </div>
    </>
  );
};

export default Main;
