// src/pages/PropertyDetailPage/PropertyDetailPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPropertyById } from "../../api/properties";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import styles from "./PropertyDetailPage.module.scss";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperty = async () => {
      setLoading(true);
      try {
        const data = await fetchPropertyById(id);
        setProperty(data);
      } catch (error) {
        console.error("Ошибка при загрузке объекта:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProperty();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!property) {
    return <p>Объект не найден.</p>;
  }

  const { title, price, location, rooms, area, photo, description, type } =
    property;

  return (
    <div className={styles.detail}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← Назад
      </button>
      <div className={styles.container}>
        <img src={photo} alt={title} className={styles.photo} />
        <div className={styles.info}>
          <h2>{title}</h2>
          <p className={styles.price}>{price.toLocaleString("uk-UA")} ₴</p>
          <p>
            {type}, {rooms} комн., {area} м²
          </p>
          <p className={styles.location}>Локация: {location}</p>
          <div className={styles.description}>
            <h3>Описание:</h3>
            <p>{description}</p>
          </div>
          {/* Здесь можно добавить контактную форму или кнопку "Связаться" */}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
