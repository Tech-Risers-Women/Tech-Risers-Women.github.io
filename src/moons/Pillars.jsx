import React, { useState } from "react";
import styles from "./pillars.module.css";
import pillar1Image from "../media/BettyWebb.png";
import pillar2Image from "../media/hedyLamarr.png";
import pillar3Image from "../media/carolShaw.png";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

function Pillars() {
  const [info, setInfo] = useState(styles.pillar1);
  const [info2, setInfo2] = useState(styles.pillar2);
  const [info3, setInfo3] = useState(styles.pillar3);

  const handleClick = () => {
    const newPosition = info === styles.pillar1 ? styles.open : styles.pillar1;
    setInfo(newPosition);
  };
  const handleClick2 = () => {
    const newPosition2 =
      info2 === styles.pillar2 ? styles.open : styles.pillar2;
    setInfo2(newPosition2);
  };
  const handleClick3 = () => {
    const newPosition3 =
      info3 === styles.pillar3 ? styles.open : styles.pillar3;
    setInfo3(newPosition3);
  };

  return (
    <div className={styles.pillars}>
      {/* Pillar 1 */}
      <div className={`${styles.pillar1} ${info}`} 
           onClick={handleClick}>
        <div className={styles.pillarDescription}>
          Tech Risers Women emphasises the creation of a supportive and
          collaborative community amongst women in tech. We want to build
          connections, share experiences, insights, and opportunities,
          ultimately to gain confidence, feel heard, and thrive with a sense of
          belonging
        </div>
        <img src={pillar1Image} 
             alt="Betty Webb at Bletchley Park"  
             className={styles.pillarImage}/>
        <h2 className={styles.pillar1Headline}>
          Community-driven
        </h2>
        <span className={styles.arrow}>
          <SlArrowRight />
        </span>
      </div>

      {/* Pillar 2 */}
      <div className={`${styles.pillar2} ${info2}`} 
           onClick={handleClick2}>
        <span className={styles.arrow}>
          <SlArrowLeft />
        </span>
        <h2 className={styles.pillar2Headline}>
          Practical Skills
        </h2>{" "}
        <img src={pillar2Image} alt="Hedy Lamarr, The mind behind secure WiFi, GPS and Bluetooth" 
             className={styles.pillarImage}/>
        <div className={styles.pillarDescription}>
          The focus here is on providing tangible, hands-on skills that are
          directly applicable in the tech field. Workshops, training sessions,
          and collaborative projects are designed to equip women with the
          practical knowledge needed to navigate the challenges of the industry.
          The goal is to ensure that participants not only gain theoretical
          knowledge but also develop the skills necessary for real-world
          scenarios, and to raise confidence and competence in their roles.
        </div>
      </div>
      {/* Pillar 3 */}
      <div className={`${styles.pillar3} ${info3}`} 
           onClick={handleClick3}>
        <div className={styles.pillarDescription}>
          We want to create an environment that supports continuous learning and
          mentorship to foster the professional development of women in tech.
          This involves providing resources, guidance, and opportunities to grow
          professionally. By emphasising professional and personal growth, the
          initiative aims to empower women to achieve their goals, whether it be
          through skill-building, networking, or mentorship programs, ultimately
          contributing to their success in the tech sector.
        </div>
        <img src={pillar3Image} 
             alt="Carol Shaw, the first female video game developer, sitting on her desk" 
             className={styles.pillarImage}/>
        <h2 className={styles.pillar3Headline}>
          Professional Growth
        </h2>
        <span className={styles.arrow}>
          <SlArrowRight />
        </span>
      </div>
    </div>
  );
}

export default Pillars;
