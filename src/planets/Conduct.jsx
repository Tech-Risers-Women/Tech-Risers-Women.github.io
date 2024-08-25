import React from "react";
import styles from "./conduct.module.css";
import Banner from "../moons/Banner";

function Conduct() {

  return (
    <div className={styles.conduct}>
      <Banner name={"Code of Conduct"} />
      <div className={styles.conductText}>
        <p>
          All attendees, organisers, facilitators, mentors, volunteers, hosts
          and venue staff involved in Tech Risers Women events are required to
          agree with the following code of conduct.
        </p>
        <p>Our organisers will enforce this code of conduct at our events.</p>
        <p>
          <strong>
            We value the diversity and inclusion of people who identify as women
            and non-binary, who are often underrepresented and marginalised
            people in tech.
          </strong>
        </p>
        <p>
          Be mindful that this will likely be a diverse group, with differences
          ranging from a wide range of religions, ethnicities, genders, gender
          identities, nationalities, sexual orientations, body sizes, physical
          appearance, mental abilities and physical abilities.
        </p>
        <p>
          Use this as an opportunity to respectfully interact with a diverse
          group of individuals in a professional and safe environment.
        </p>
        <p>
          We are all here to learn and grow. Our events, being professional and
          safe, are not the appropriate time and place to harass individuals
          based on their underrepresented status.
        </p>
        <p>
          Anyone found to be behaving in any way that makes our attendees
          uncomfortable or impedes the intended goals of our events will be in
          violation of this Code of Conduct and will be ejected from our events.
        </p>
        <p>
          Offensive verbal comments related to gender, sexual orientation,
          disability, physical appearance, body size, race, religion, sexual
          images in public spaces, deliberate intimidation, stalking, following,
          unwelcome photography or recording, sustained disruption of talks or
          other events, inappropriate physical contact, and unwelcome sexual
          attention are also considered inappropriate behaviour.
        </p>
        <p>
          Please do not attend our events with the intention to recruit for
          openings in your or your client’s companies. Mentions of available
          openings are solely allowed to our hosts, sponsors and speakers.
          Should you be found trying to actively recruit for your own openings,
          you will be asked to leave.
        </p>
        <p>
          If you or someone else are subjected to inappropriate behaviour or
          have any other concerns please follow the Reporting steps below.
        </p>
      </div>

      <div className={styles.conductText}>
        <h2>Consequences</h2>
        <p>
          If your behaviour proves to be harmful to others, you will have to be
          removed from all Tech Risers Women events and banned from the
          organisation.
        </p>
      </div>

      <div className={styles.conductText}>
        <h2>Reporting Steps</h2>
        <p>
          The organisers are here to help attendees feel safe for the duration
          of our events.
        </p>
        <p>We value your participation.</p>
        <p>If you need to report an incident please contact a Tech Risers Women organiser:</p>
        <ul>
          <li>
            Emma Gale: <a href="mailto:emmajgale3@gmail.com">emmajgale3@gmail.com</a>
          </li>
          <li>
            Clarice Dallorto: <a href="mailto:claricerdallorto@gmail.com">claricerdallorto@gmail.com</a>
          </li>
          <li>
              Nele Petry: <a href="petrydev@outlook.com]">mailto:petrydev@outlook.com</a>
          </li>
        </ul>
        <p>You can also report violations to them during an event.</p>
        <p>
          If the person you need to report is a member of the Tech Risers Women
          organiser team, please escalate to Sarah Usher at
          techriserswomen@gmail.com
        </p>
        <p>
          With thanks to https://www.globaldiversitycfpday.com/code-of-conduct
          upon which we based our Code of Conduct.
        </p>
      </div>
    </div>
  );
}

export default Conduct;
