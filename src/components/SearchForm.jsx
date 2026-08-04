import React from "react";
import styles from "../Weather.module.css";

const SearchForm = ({ city, setCity, handleSubmit }) => {
  return (
    <div className={styles.searchBox}>
      <h1 className={styles.searchHeading}>Search Weather</h1>

      <p className={styles.searchSubHeading}>
        Find real-time weather updates for any city.
      </p>

      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.searchInput}
        />

        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
