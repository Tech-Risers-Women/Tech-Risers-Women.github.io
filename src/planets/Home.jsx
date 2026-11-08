import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Intro from "../moons/MainIntro.jsx";
// import MainContent from "../moons/MainContent.js";

function Home() {
  const [fadeIn, setFadeIn] = useState(false);

useEffect(() => {
  setFadeIn(true);
}, []);

  return (
    <div className={styles.home}>
      {/* One <h1> so screen readers and search engines read "Tech Risers
          Women" as a single heading. Spans (not divs) because a heading
          can only contain inline content; CSS makes them display as blocks. */}
      <h1 className={styles.heroDivider}>
        <span className={styles.heroLine}>
          <span
            className={`${styles.heroWord} ${styles.noHeadlineOne} ${
              fadeIn ? styles.headlineOne : ""
            }`}
          >
            Tech
          </span>
        </span>{" "}
        <span
          aria-hidden="true"
          className={`${styles.heroRule} ${styles.noheadlineDivider} ${
            fadeIn ? styles.headlineDivider : ""
          }`}
        ></span>
        <span className={styles.heroLine}>
          <span
            className={`${styles.heroWord} ${styles.noHeadlineTwo} ${
              fadeIn ? styles.headlineTwo : ""
            }`}
          >
            Risers
          </span>
        </span>{" "}
        <span
          aria-hidden="true"
          className={`${styles.heroRule} ${styles.noheadlineDivider} ${
            fadeIn ? styles.headlineDivider2 : ""
          }`}
        ></span>
        <span className={styles.heroLine}>
          <span
            className={`${styles.heroWord} ${styles.noHeadlineThree} ${
              fadeIn ? styles.headlineThree : ""
            }`}
          >
            Women
          </span>
        </span>
      </h1>
      <Intro />
      {/* <MainContent /> */}
      {/* Main content: links to about, group sessions, donation */}
    </div>
  );
}

export default Home;
