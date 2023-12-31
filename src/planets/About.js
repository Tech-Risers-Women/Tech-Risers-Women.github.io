import React, { useEffect, useRef, useState } from "react";
import styles from "./about.module.css";
import Pillars from "../moons/Pillars.js";
import PillarsSmallScreen from "../moons/PillarsSmallScreen.js";

function About() {
  const [isInViewport, setIsInViewport] = useState(false);
  const aboutHeroDividerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const isIntersecting = entries[0].isIntersecting;
      setIsInViewport(isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection);
    const currentRef = aboutHeroDividerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); 

  return (
    <div className={styles.about}>
      <div ref={aboutHeroDividerRef} className={styles.aboutHeroDivider}>
        <div>
          <h1
            className={`${styles.noAboutHeadline} ${
              isInViewport ? styles.aboutHeadline : styles.noAboutHeadline
            }`}
          >
            About
          </h1>
        </div>
      </div>
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
