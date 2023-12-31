import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Intro from "../moons/MainIntro.js";
// import MainContent from "../moons/MainContent.js";

function Home() {
  const [fadeIn, setFadeIn] = useState(false);

useEffect(() => {
  setFadeIn(true);
}, []);

  return (
    <div className={styles.home}>
      <div className={styles.heroDivider}>
        <div>
          <h1
            className={`${styles.noHeadlineOne} ${
              fadeIn ? styles.headlineOne : ""
            }`}
          >
            Tech{" "}
          </h1>
        </div>

        <div
          className={`${styles.noheadlineDivider} ${
            fadeIn ? styles.headlineDivider : ""
          }`}
        ></div>
        <div>
          <h1
            className={`${styles.noHeadlineTwo} ${
              fadeIn ? styles.headlineTwo : ""
            }`}
          >
            {" "}
            Risers{" "}
          </h1>
        </div>
        <div
          className={`${styles.noheadlineDivider} ${
            fadeIn ? styles.headlineDivider2 : ""
          }`}
        ></div>

        <div>
          <h1
            className={`${styles.noHeadlineThree} ${
              fadeIn ? styles.headlineThree : ""
            }`}
          >
            {" "}
            Women
          </h1>
        </div>
      </div>
      <Intro />
      {/* <MainContent /> */}
      {/* Main content: links to about, group sessions, donation */}
    </div>
  );
}

export default Home;
