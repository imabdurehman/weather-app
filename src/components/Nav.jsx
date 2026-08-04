import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Weather.module.css";

function Navbar() {
  const activeCheck = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>WeatherNow</h2>

      <div className={styles.navLinks}>
        <NavLink to="/" className={activeCheck}>
          Home
        </NavLink>

        <NavLink to="/weather" className={activeCheck}>
          Weather
        </NavLink>

        <NavLink to="/about" className={activeCheck}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
