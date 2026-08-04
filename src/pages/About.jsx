import React from "react";
import styles from "../Weather.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutCard}>
        <span className={styles.aboutTag}>About WeatherNow</span>

        <h1>Your Modern Weather Companion</h1>

        <p className={styles.aboutText}>
          WeatherNow is a modern weather application built with React. It
          provides real-time weather information for cities around the world
          using a public weather API. The goal is to deliver accurate forecasts
          with a clean, responsive, and user-friendly interface.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>🌍 Global Search</h3>
            <p>Find weather information for cities worldwide.</p>
          </div>

          <div className={styles.feature}>
            <h3>⚡ Live Weather</h3>
            <p>Get real-time temperature, humidity and wind details.</p>
          </div>

          <div className={styles.feature}>
            <h3>📱 Responsive</h3>
            <p>Optimized for desktop, tablet and mobile devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
