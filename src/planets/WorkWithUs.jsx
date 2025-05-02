import React from 'react';
import styles from './workwithus.module.css';
import Banner from '../moons/Banner';

function WorkWithUs() {
	return (
		<div className={styles.workwithus}>
			<Banner name={'Work With Us'} />
			<div className={styles.workwithusText}>
				<h2>Volunteer with us!</h2>
				<p>
					Tech Risers Women is managed and run by volunteers. We're
					always on the lookout for people to join us to help with
					keeping it running. This is an opportunity to share you
					skills and learn new ones.
				</p>
				<ul>
					<li>Help lead sessions</li>
					<li>Help with social media</li>
					<li>Help with general orgainsing</li>
					<li>
						Help with any other way you would like to contribute
					</li>
				</ul>
				<a href="https://forms.gle/mT6ySwpGRWDBrjHK7">
					<button className={styles.getUpdatesButton}>
						Volunteer with us
					</button>
				</a>
			</div>
			<div className={styles.workwithusText}>
				<h2>Partner with us!</h2>
			</div>
		</div>
	);
}

export default WorkWithUs;
