import React from "react";
import styles from "./workwithus.module.css";
import Banner from "../moons/Banner";

function WorkWithUs() {
  return (
    <div className={styles.workwithus}>
      <Banner name={"Work With Us"} />

      <div className={styles.workwithusText}>
        <h2>
          Explore an opportunity with us, to share your skills, grow yourself and others, and give back to the community.
        </h2>

        <h3>Initiative Co-Lead</h3>
        <p>
          This role involves ensuring sessions are planned, hosting is covered, onboarding & learning sessions are run and creating and running our ad hoc coding sessions.
          We are looking for leads for our upcoming Bootcamp++ initiative and for another co-lead for Group Coding sessions.
        </p>

        <h3>Organiser</h3>
        <p>
          We are looking for folks to assist on the core organising team. Work here involves planning for all initiative, creating events, LinkedIn posts and supporting the Initiative Leads.
        </p>

        <h3>Mentor</h3>
        <p>
          Coding mentors who provide their expertise during our sessions. Mentors need to be proficient in either Python, Java or JavaScript and ideally are experienced in TDD,
          or are experienced engineers or architects who can review code and architecture design.
          This is ad hoc and perfect for those with little time but who want to share their skills when they can.
        </p>

        <h3>Partner</h3>
        <p>
          We would love to partner with other communities and share across our audiences. <br />
          We are open to partnering with companies who are looking to see more women promoted on the IC career track.
        </p>

        <a
            href='https://forms.gle/CHMeCsVV6Lf5NsZu5'
            target='_blank'
            rel='noreferrer'
            alt='Volunteer with us'>
            <button className={styles.button}>Volunteer with us</button>
        </a>

        <a
            href='https://forms.gle/ThRF2PPKhg6NsqQFA'
            target='_blank'
            rel='noreferrer'
            alt='Partner with us'>
            <button className={styles.button}>Partner with us</button>
        </a>

      </div>

      <div className={styles.workwithusText}>
        <h2>Why volunteer or partner with us</h2>

        <p>
          Our community focuses on practice and applying skills. You'll be able to help
          an upcoming mid/senior/staff engineer improve their technical skills, grow their confidence,
          and see them move up the career ladder, making sure more women stay in technical roles, and rise.
        </p>

        <p>
          You'll also practice your own mentorship, communication and facilitation skills in the process.
          As a partner, you'll reach an audience of aspiring women engineering leaders and be able to
          contribute to their growth.
        </p>

        <p>
          You will also be able to build
          a network of women engineers and meet folks from across the globe.
        </p>

        <p>
          If you haven't worked in events before, you'll learn how to run events online.
        </p>

        <div className={styles.centeredBlock}>
          <p>We want to see:</p>

          <div className={styles.leftAlignedListWrapper}>
            <ul className={styles.leftAlignedList}>
              <li>more women stay in tech</li>
              <li>more women get promoted</li>
              <li>more women engineers leading important technical work</li>
            </ul>
          </div>

          <p>Join us as we make it happen.</p>
        </div>


      </div>
    </div>
  );
}

export default WorkWithUs;

