import React from 'react'
import styles from "./banner.module.css";
import { useRef, useState, useEffect } from 'react';

function Banner({name}) {
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
    <div ref={aboutHeroDividerRef} className={styles.aboutHeroDivider}>
    <div>
      <h1
        className={`${styles.noAboutHeadline} ${
          isInViewport ? styles.aboutHeadline : styles.noAboutHeadline
        }`}
      >
        {name}
      </h1>
    </div>
  </div>
  )
}

export default Banner