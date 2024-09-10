import React from "react";
import { useParams } from "react-router-dom";
import Eventdata from "../API/EventApi";
import { Link } from "react-router-dom";
import style from "./CardInfo.module.css";

const CardInfo = () => {
//To access URL parameters
  const { id } = useParams();

//Finding events from Eventdata
  const event = Eventdata.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>No event found</div>;
  }
  const { category, status, description, date,
    day, time, venue, location, city, host, title, image } = event;

  return (
    <>
      <div className={style.cardinfo} key={id}>
        <Link to="/">
          <button className={style.backButton}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </Link>
        <div className={style["main-container"]}>
          <div className={style["image-container"]}>
            <div className={style["card-image-card-info"]}>
              <img src={`/${image}`} alt={title} />
            </div>
            <br />
          </div>
          <div className={style["info-container"]}>
            <h2><span className="highlight">{title}</span></h2>
            <br />
            <p>{description}</p>
            <br />
            <ul>
              <li><span className="highlight">Category: </span> {category}</li>
              <li><span className="highlight">Status: </span> {status}</li>
              <li><span className="highlight">Date: </span> {date}</li>
              <li><span className="highlight">Day: </span> {day}</li>
              <li><span className="highlight">Time: </span> {time}</li>
              <li><span className="highlight">Venue: </span> {venue}</li>
              <li><span className="highlight">Location: </span> {location}</li>
              <li><span className="highlight">City: </span> {city}</li>
              <li><span className="highlight">Host: </span> {host}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
