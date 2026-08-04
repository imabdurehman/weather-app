import React from "react";
import styles from "../Weather.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p>Fetching Weather...</p>
    </div>
  );
};

export default Loader;
