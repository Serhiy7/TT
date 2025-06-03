// src/components/PropertyCard/PropertyCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./PropertyCard.module.scss";

const PropertyCard = ({ property }) => {
  const { id, title, price, location, rooms, area, photo } = property;

  return (
    <Link to={`/properties/${id}`} className={styles.card}>
      <img src={photo} alt={title} className={styles.photo} />

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.details}>
          <span>{location}</span>
          <span>
            {rooms} {rooms === 1 ? "кімн." : "кімн."}
          </span>
          <span>{area} м²</span>
        </p>

        <p className={styles.price}>{price.toLocaleString("uk-UA")} ₴</p>
      </div>
    </Link>
  );
};

export default PropertyCard;
