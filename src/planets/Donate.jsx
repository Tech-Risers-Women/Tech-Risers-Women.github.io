import React, { useEffect, useRef, useState } from "react";
import styles from "./donate.module.css";
import christineDarden from "../media/christineDarden.png";

function Donate() {
  const [isInViewport, setIsInViewport] = useState(false);
  const donateHeroDividerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const isIntersecting = entries[0].isIntersecting;
      setIsInViewport(isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection);
    const currentRef = donateHeroDividerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [donateHeroDividerRef]);
  return (
    <div className={styles.donate}>
      <div ref={donateHeroDividerRef} className={styles.donateHeroDivider}>
        <div>
          <h1
            className={`${styles.noDonateHeadline} ${
              isInViewport ? styles.donateHeadline : styles.noDonateHeadline
            }`}
          >
            Support us
          </h1>
        </div>
      </div>
      <div className={styles.donateWrapper}>
        <div>
          <h2> Help us to empower women in tech today</h2>
          <p>
            Contribute to our mission by making a donation. Your support helps
            to provide opportunities for skill-building, mentorship, and
            community. Support us, to create a world of opportunities where
            every woman has the chance to thrive and shine.
          </p>
          <button className={styles.donateButton}>
            <a href="/" title="">
              Donate here
            </a>
          </button>
        </div>
        <div>
          <img src={christineDarden} alt="" className={styles.introImage} />
        </div>
      </div>
    </div>
  );
}

export default Donate;
