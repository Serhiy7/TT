// src/components/LoadingSpinner/LoadingSpinner.jsx
import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}></div>
  </div>
);

export default LoadingSpinner;
