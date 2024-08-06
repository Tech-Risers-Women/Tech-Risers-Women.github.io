import React from "react";
import { Link } from "react-router-dom";
import Banner from "../moons/Banner";
import styles from "./groupcoding.module.css";
import { LuHeartHandshake } from "react-icons/lu";
import eniacImage from "../media/ENIAC.webp";

function GroupCoding() {
  return (
    <div className={styles.groupcoding}>
      <Banner name={"Group Coding Sessions"} />
      <div className={styles.groupcodingTile}>
        <div className={styles.groupcodingText}>
          <p>
            Our group coding session are a continuous practice group focused on
            hands-on skill development. We apply Test Driven Design/Development
            and good coding practices while Ensemble coding on Katas and
            practice applications. We onboard new starters a few times a year.
            Sign-up here to get notified about the next session.
          </p>
          <Link
            className={styles.groupcodingJoin}
            to="https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true"
            target="_blank"
          >
            <LuHeartHandshake />
            <p className={styles.groupcodingCall}>Sign up</p>
          </Link>
        </div>
        <div>
          <img
            className={styles.groupcodingImage}
            src={eniacImage}
            alt="The Women employed by the ENIAC project"
          />
        </div>
      </div>

      <div className={`${styles.groupcodingTile} ${styles.groupcodingUnflex}`}>


      <details className={styles.groupcodingQuestions}>
        <summary>When and where do the Group Coding Sessions take place?</summary>
        <span>
        Our Group Coding sessions are held on Zoom on Wednesdays at 7pm
        London time.
        </span>
      </details>

      <details className={styles.groupcodingQuestions}>
        <summary>Which programming languages do you use?</summary>
        <span>
        We welcome all programming languages.
        </span>
      </details>

      <details className={styles.groupcodingQuestions}>
        <summary>What do I need to know before attending?</summary>
        <span>
        These sessions are suitable for people at all stages of their
            career, as well as those who are considering a career in tech, and
            would like to experience coding with others in a friendly
            environment and to expand their skills and knowledge. You'll need to
            know the basics of at least of one programming language before
            attending - that's it! The basics include: Setting up a project,
            basic syntax, variables, primitive types, loops and functions.
        </span>
      </details>

      </div>
    </div>
  );
}

export default GroupCoding;
