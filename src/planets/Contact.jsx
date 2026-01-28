import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";
import { LuMail } from "react-icons/lu";
import { TbHeartCode } from "react-icons/tb";
import { LuHeartHandshake } from "react-icons/lu";

function Contact() {
  const [isInViewport, setIsInViewport] = useState(false);
  const contactHeroDividerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const isIntersecting = entries[0].isIntersecting;
      setIsInViewport(isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection);

    const currentRef = contactHeroDividerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [contactHeroDividerRef]);
  return (
    <div className={styles.contact}>
      <div ref={contactHeroDividerRef} className={styles.contactHeroDivider}>
        <div>
          <h1
            className={`${styles.noContactHeadline} ${
              isInViewport ? styles.contactHeadline : styles.noContactHeadline
            }`}
          >
            Contact us!
          </h1>
        </div>
      </div>
      <div className={styles.contactWrapper}>
        <h2>Get in Touch </h2>
        <p>
          If you have any questions or would like to learn more about{" "}
          <em>Tech Risers Women</em>, please don't hesitate to contact us. We
          also welcome curious women to join our Wednesday group sessions.
        </p>
        <div>
          <div className={styles.contactLinks}>
            <a className={styles.linkWrapper}
                href="mailto:techriserswomen@gmail.com?subject=Tech Risers Women"
                target="_blank"
                rel="noreferrer"
                title="send an email to Tech Risers Women to get in touch"
              >
                <LuMail className={styles.contactLink} />
              <p>send us an email</p>
            </a>
            <a className={styles.linkWrapper}
                href="https://www.linkedin.com/newsletters/tech-risers-women-newsletter-7422318142938468352/"
                target="_blank"
                rel="noreferrer"
                title="Sign up for updates about Tech Risers Women - everyone welcome!"
            >
                <TbHeartCode className={styles.contactLink} />
              <p>sign up for updates</p>
            </a>
            <a
              className={styles.linkWrapper}
              href="https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true"
              target="_blank"
              rel="noreferrer"
              title="Sign-up as a member - choose the initiatives you would like to participate in"
            >
              <LuHeartHandshake className={styles.contactLink} />
              <p>join us</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
