import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../moons/Banner'
import Stack from '../moons/Stack'
import { LuHeartHandshake } from "react-icons/lu";
import hamiltonImage from '../media/MargeretHamilton.avif';
import styles from './architect.module.css'


function Architect() {
  return (
    <div className={styles.architect}>
    <div className={styles.architect}>
    <Banner name={"The Architects' Kata Club"}/>
      <div className={styles.architectTile}>
        <div className={styles.architectText}>
          <p>
          The Architects Kata Club is where we practice designing systems for various domains and technical problems. What better way to improve your architecture skills than to practice them and gain exposure, beyond what you get to do at work. Share and grow your knowledge of architectural patterns and design principles. In small groups, participants tackle different katas in a collaborative environment, moderated to ensure smooth progress and skill application.
          </p>
          <Link
            className={styles.architectJoin}
            to="https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true"
            target="_blank"
          >
            <LuHeartHandshake />
            <p className={styles.architectCall}>Sign up</p>
          </Link>
        </div>
        <Stack />

        {/* <div>
        <img
            className={styles.architectImage}
            src={hamiltonImage}
            alt="Margeret Hamilton piling up the printed code of her Apollo program."
          />


        </div> */}
      </div>

      <div className={`${styles.architectTile} ${styles.architectUnflex}`}>

      <details className={styles.architectQuestions}>
        <summary>What do I need to know before attending?</summary>
        <span>
        Participants should have experience in deploying features to production systems.
        </span>
      </details>

      </div>
    </div>

    </div>

  )
}

export default Architect