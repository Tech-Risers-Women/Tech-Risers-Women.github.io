import React, { useEffect, useRef, useState } from "react";
import styles from "./about.module.css";
import Banner from "../moons/Banner.jsx";


function Volunteer() {

  return (
    <div className={styles.about}>
      <Banner name={"Volunteer"}/>
      <div className={styles.aboutIntro}>
        <h2>Volunteer with us</h2>
        <p>
          Explore an oppertunity with us, to share your skills, grow others and give back.
        </p>
      </div>
    </div>
  );
}

export default Volunteer;
