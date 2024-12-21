import React, { useState, useEffect} from "react";
import styles from "./Toggle.module.css";

const Toggle = () => {
  const [theme, setTheme] = useState("dark");

  const change = () => {
    const body = document.querySelector("body");

    // Toggle class based on the current theme
    if (theme === "dark") {
      body.classList.remove("dark");
      body.classList.add("light");
      setTheme("light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    // Set the body class on initial load based on the theme
    const body = document.querySelector("body");
    body.classList.add("dark");
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className={styles.toggle}>
      <p className={styles[`${theme}`]}>{theme}</p>
      <input type="checkbox" id="toggle" onChange={change} />
      <label htmlFor="toggle"></label>
    </div>
  );
};

export default Toggle;
