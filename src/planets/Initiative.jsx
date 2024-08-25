import { Link } from "react-router-dom";
import styles from "./initiative.module.css";
import { LuHeartHandshake } from "react-icons/lu";

function Initiative({ initiative, children }) {
  const { initiativeText, initiativeLink, initiativeFAQs } = initiative;
  const [banner, photo] = children;
  return (
    <div className={styles.initiative}>
      {banner}
      <div className={styles.initiativeTile}>
        <div className={styles.initiativeText}>
          <p>{initiativeText}</p>
          <Link
            className={styles.initiativeJoin}
            to={initiativeLink}
            target="_blank"
          >
            <LuHeartHandshake />
            <p className={styles.initiativeCall}>Sign up</p>
          </Link>
        </div>
        {photo}
      </div>

      <div className={`${styles.initiativeTile} ${styles.initiativeUnflex}`}>
        {initiativeFAQs.map((faq) => {
          return (
            <details
              className={styles.initiativeQuestions}
              key={faq.summary.substring(0, 10)}
            >
              <summary>{faq.summary}</summary>
              <span>{faq.details}</span>
            </details>
          );
        })}
      </div>
    </div>
  );
}

export default Initiative;
