import React from "react";
import { Link } from "react-router-dom";
import styles from "../Weather.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <p className={styles.tag}>Weather Forecast App</p>

        <h1>Stay Ahead of the Weather</h1>

        <p className={styles.heroText}>
          Search any city and get accurate real-time weather information with a
          beautiful modern interface.
        </p>

        <Link to="/weather" className={styles.heroBtn}>
          Explore Weather
        </Link>
      </div>
    </section>
  );
}

export default Home;
