import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../moons/Banner'
import styles from './groupcoding.module.css'
import { LuHeartHandshake } from "react-icons/lu"
import eniacImage from '../media/ENIAC.webp'


function GroupCoding() {
  return (
    <div className={styles.groupcoding}>
    <Banner name={"Group Coding Sessions"}/>
    <div className={styles.groupcodingTile}>

        <div className={styles.groupcodingText}>
          <p>
          Our Group Coding sessions are held on Wednesday evenings. They focus on hands-on skill development through pair programming and Test Driven Development - a safe space to practice and discuss code with other women. <br />
          We work on coding katas in Java, JavaScript and Python. The program runs in cycles, starting multiple times per year.       
          </p>
          <Link className={styles.groupcodingJoin}
           to="https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true" target="_blank">

          <LuHeartHandshake />
          <p className={styles.groupcodingCall}>Join us</p>

          </Link>
        </div>
        <div >
          <img
            className={styles.groupcodingImage}
            src={eniacImage}
            alt="The Women employed by the ENIAC project"
          />
        </div>

    </div>
    </div>

  )
}

export default GroupCoding