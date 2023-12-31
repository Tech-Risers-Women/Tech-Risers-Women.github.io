import React from "react";
import styles from "./footer.module.css";
// import { FaXTwitter } from "react-icons/fa6";
// import { SiInstagram } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { TbHeartCode } from "react-icons/tb";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerWrapper}>
        <b>Tech Risers Women</b> is an initiative to empower women in tech
        through collaborative learning, mentorship, group coding and networking
        sessions
      </p>
      <p>       
        contact us
        <span className={styles.icon}>
          <a  href="mailto:sarahnusher@gmail.com?subject=Tech Risers Women" 
              target="_blank" 
              rel="noreferrer" 
              alt="send an Email to Tech Risers Women to get in touch"  
              className={styles.contactLink}>
                <LuMail />
          </a>
        </span>
      {/* <span className={styles.icon}>
            <a href="/" alt="" className={styles.socialsLink}>
            <FaXTwitter />
            </a>
          </span> */}
        {/* <span className={styles.icon}>
          <a href="/" alt="" className={styles.socialsLink}>
          <SiInstagram />
          </a>
          </span> */}
          get updates
          <span className={styles.icon}>
          <a  href="https://forms.gle/MqyXV2HPRtUMAopE6" 
              target="_blank" 
              rel="noreferrer" 
              alt="Fill out this form to receive regular updates" 
              className={styles.contactLink}>
                <TbHeartCode />
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
