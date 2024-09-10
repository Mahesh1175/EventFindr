import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ eventData }) => {
  return (
    <>
      {eventData.map((curElem) => {
        const { id, status, date, time, venue, host, title, image } = curElem;

        return (
          <Link to={`/cardinfo/${id}`} key={id} className={style.card}>
            <div className={style["card-image"]}>
              <img src={image} alt='Event' />
            </div>
            <div className={style.title}>{title}</div>
            <div className={style.description}>
              <div className={style["hosted-by"]}>{host}</div>
              <div className={style["date-time"]}>
                <h4 id={style["card-date"]}>{date}</h4>
                <h4 id={style["card-time"]}>{time}</h4>
              </div>
              <div className={style["venue-status"]}>
                <h4 id={style["card-venue-city"]}>{venue}</h4>
                <h4 id={style["status-forp"]}>{status}</h4>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
