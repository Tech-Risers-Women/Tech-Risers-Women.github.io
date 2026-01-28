import React from 'react';
import {Link} from 'react-router-dom';
import styles from './mainIntro.module.css';
import womenImage from '../media/MaryWilkes.png';

function intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introWrapper}>
        <div>
          <p>
            Fostering empowerment in the tech industry, our community-run
            initiative brings together women through regular meetings and group
            coding sessions. We provide a platform for collaborative learning,
            training, skill application and networking, creating a community that champions
            diversity and innovation. Join us as we inspire, support, and propel
            women in tech toward their professional goals.
          </p>

{/*           <Link */}
{/*             to='/about' */}
{/*             title='learn more about Tech risers Women'> */}
{/*             <button className={styles.aboutButton}>learn more</button> */}
{/*           </Link> */}

          <a
            href='https://www.linkedin.com/newsletters/tech-risers-women-newsletter-7422318142938468352/'
            target='_blank'
            rel='noreferrer'
            alt='Sign up for updates about Tech Risers Women - everyone welcome!'>
            <button className={styles.getUpdatesButton}>Public Newsletter</button>
          </a>
          <a
            href='https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true'
            target='_blank'
            rel='noreferrer'
            alt='Sign-up as a member - choose the initiatives you would like to participate in'>
            <button className={styles.getUpdatesButton}>Join Us</button>
          </a>
        </div>
        <div>
          <img
            src={womenImage}
            alt='Mary Allen Wilkes working on one of the first PCs'
            className={styles.introImage}
          />
        </div>
      </div>
    </div>
  );
}

export default intro;
