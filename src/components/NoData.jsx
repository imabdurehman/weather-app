import React from "react";
import styles from "../Weather.module.css";

const NoData = () => {
  return (
    <div className={styles.noData}>
      <h2>No Weather Data</h2>

      <p>Search for any city to view its current weather.</p>
    </div>
  );
};

export default NoData;
