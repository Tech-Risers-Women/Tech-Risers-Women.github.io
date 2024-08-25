import React from "react";
import {Link} from 'react-router-dom';
import styles from "./mainContent.module.css";
import mainLinkImage from "../media/annieEasley.png";
import mainLinkImage2 from "../media/graceHopper.png";
import mainLinkImage3 from "../media/melbaMouton.png";

function MainContent() {
  return (
    <div className={styles.mainContentWrapper}>
      <div>
        <img src={mainLinkImage} 
           alt="Annie Easley, computer science pioneer in the Engine Research Building's Central Control Room" 
           className={styles.mainLinkImage} />
      </div>
      <div>
        <img src={mainLinkImage2} 
           alt="Grace Hopper, who worked on the UNIVAC computer series and developed the programming language COBOL" 
           className={styles.mainLinkImage} />
      </div>
      <div>
        <img src={mainLinkImage3} 
           alt="Melba Mouton standing next to a experimenters test control machine" 
           className={styles.mainLinkImage} />
      </div>
      <div>
        <p className={styles.mainLinkDescription}>
          With our initiatives, we unite women who code, encourage collaboration
          and community.
        </p>
      </div>
      <div>
        <p className={styles.mainLinkDescription}>
          Every Wednesday we we come together to learn, share skills and and
          support each other.
        </p>
      </div>
      <div>
        <p className={styles.mainLinkDescription}>
          Help us to support women in tech and to follow our vision.
        </p>
      </div>
      <div>
        <Link href="/" 
           title="learn more about what Tech Risers Women stands for" 
           className={styles.mainLink}>
          learn more about our initiatives
        </Link >
      </div>
      <div>
        <Link href="/" 
           title="sign up to join our group coding sessions" 
           className={styles.mainLink}>
          join our group coding sessions
        </Link>
      </div>
      <div>
        <Link href="/" 
           title="help and donate to Tech Risers Women" 
           className={styles.mainLink}>
          donate to Tech Risers Women
        </Link>
      </div>
    </div>
  );
}

export default MainContent;
