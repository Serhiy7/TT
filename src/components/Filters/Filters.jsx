// src/components/Filters/Filters.jsx
import { useState } from "react";
import styles from "./Filters.module.scss";

const Filters = ({ onApply }) => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [rooms, setRooms] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {};
    if (location) filters.location_like = location;
    if (type) filters.type = type;
    if (rooms) filters.rooms = rooms;
    if (priceFrom) filters.price_gte = priceFrom;
    if (priceTo) filters.price_lte = priceTo;
    onApply(filters);
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label>Локация:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Город или район"
        />
      </div>
      <div className={styles.field}>
        <label>Тип:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Все</option>
          <option value="Квартира">Квартира</option>
          <option value="Дом">Дом</option>
          <option value="Коммерция">Коммерческая</option>
        </select>
      </div>
      <div className={styles.field}>
        <label>Комнат:</label>
        <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
          <option value="">Любое</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3+</option>
        </select>
      </div>
      <div className={styles.field}>
        <label>Цена от:</label>
        <input
          type="number"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          placeholder="₴"
        />
      </div>
      <div className={styles.field}>
        <label>Цена до:</label>
        <input
          type="number"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          placeholder="₴"
        />
      </div>
      <button type="submit" className={styles.applyBtn}>
        Применить
      </button>
    </form>
  );
};

export default Filters;
