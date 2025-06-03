// src/pages/HomePage/HomePage.jsx
import React, { useEffect, useState } from "react";
import { fetchProperties } from "../../api/properties";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import Filters from "../../components/Filters/Filters";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      try {
        const data = await fetchProperties(filters);
        setProperties(data);
      } catch (error) {
        console.error("Ошибка при загрузке объектов:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProperties();
  }, [filters]);

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.homePage}>
      <h1>Список нерухомості</h1>
      <Filters onApply={handleApplyFilters} />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.grid}>
          {properties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
