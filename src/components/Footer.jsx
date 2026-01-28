import React from 'react';
import styles from './footer.module.css';
// import { FaXTwitter } from "react-icons/fa6";
// import { SiInstagram } from "react-icons/si";
import {LuMail} from 'react-icons/lu';
import {TbHeartCode} from 'react-icons/tb';

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
          <a
            href='mailto:techriserswomen@gmail.com?subject=Tech Risers Women'
            target='_blank'
            rel='noreferrer'
            title='send an Email to Tech Risers Women to get in touch'
            className={styles.contactLink}>
            <LuMail />
          </a>
        </span>
        get updates
        <span className={styles.icon}>
          <a
            href='https://www.linkedin.com/newsletters/tech-risers-women-newsletter-7422318142938468352/'
            target='_blank'
            rel='noreferrer'
            title='Sign up for updates about Tech Risers Women - everyone welcome!'
            className={styles.contactLink}>
            <TbHeartCode />
          </a>
        </span>
        <wbr/>
        join&nbsp;us
        <span className={styles.icon}>
          <a
            href='https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true'
            target='_blank'
            rel='noreferrer'
            title='Fill out this form to join our workshops and group coding sessions'
            className={styles.contactLink}>
            <TbHeartCode />
          </a>
        </span>
      </p>
      <p className={styles.footnote}>
        This website is{' '}
        <a
          href='https://github.com/Tech-Risers-Women/Tech-Risers-Women.github.io'
          target='_blank'
          rel='noreferrer'
          alt='Tech risers women gitHub repository'>
          open source
        </a>
        , developed by{' '}
        <a
          href='https://www.eva-nagengast.com'
          target='_blank'
          rel='noreferrer'
          alt='Eva Nagengasts website'>
          Eva Nagengast
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
