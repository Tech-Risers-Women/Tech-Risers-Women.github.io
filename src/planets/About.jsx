import React, { useEffect, useRef, useState } from "react";
import styles from "./about.module.css";
import Pillars from "../moons/Pillars.jsx";
import PillarsSmallScreen from "../moons/PillarsSmallScreen.jsx";
import Banner from "../moons/Banner.jsx";


function About() {

  return (
    <div className={styles.about}>
      <Banner name={"About"}/>
      <div className={styles.aboutIntro}>
        <h2> Pillars of Tech Risers Women</h2>
        <p>
          Explore the cornerstones that define our mission and commitment to
          advancing women in tech. Tech Risers Women is a community-driven space
          that concentrates on acquiring practical skills and continuous
          professional growth. Together, we're shaping an inclusive and dynamic
          environment where women excell in the tech world.
        </p>
      </div>
      <div className={styles.pillars}>
        <Pillars />
      </div>
      <div className={styles.smallScreenPillars}>
        <PillarsSmallScreen />
      </div>
    </div>
  );
}

export default About;
