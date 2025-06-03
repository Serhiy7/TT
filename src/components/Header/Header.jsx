// src/components/Header/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <NavLink to="/" className={styles.logo}>
          RealEstateHub
        </NavLink>

        <nav className={styles.nav}>
          {/* NavLink автоматически ставит класс "active" по совпадающему маршруту */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Объекты
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            О проекте
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
