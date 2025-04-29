import React from "react";
import styles from "./workwithus.module.css";
import Banner from "../moons/Banner";


function WorkWithUs() {

  return (
    <div className={styles.workwithus}>
      <Banner name={"Work With Us"}/>
        <div className={styles.workwithusText}>
                <p>
                  What to put here...
                </p>
        </div>
    </div>
  );
}

export default WorkWithUs;
