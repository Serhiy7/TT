// src/components/Footer/Footer.jsx
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>© 2025 RealEstateHub. Все права защищены.</p>
        <div className={styles.socials}>
          <a
            href="https://github.com/ваш_профиль"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ваш_профиль"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          {/* <a
            href="https://t.me/ваш_профиль"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Telegram
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
