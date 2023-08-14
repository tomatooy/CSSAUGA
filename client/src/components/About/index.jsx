import React from 'react'
import styles from './About.module.css'
import pic from '../../image/aboutPic.jpg'
import { Link } from 'react-router-dom'
export default function About() {
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.bannerUpper}>
                <div className={styles.upperTextWrapper}>
                    <h1 className={styles.bannerH1}>WHAT IS<span> CSSA.</span></h1>
                    <p>
                        CSSA mainly consists of Chinese students and scholars from different areas in China. We tried to make all Chinese students united and establish more friendships. The stated function of CSSAs is helping away-from-home Chinese in their life, study, work, and other issues, to bring Chinese students together on campus, serving as a bridge between the Chinese and other communities, and spreading Chinese culture. The groups typically host events such as annual Chinese New Year galas, holiday celebrations as well as academic forums and talent recruitment competitions tied to the Thousand Talents Plan.
                    </p>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.bannerPic}>
                    <img className={styles.aboutImg} src={pic} alt="" />
                </div>
                <div className={styles.bannerText}>
                    <div className={styles.lowerTextWrapper}>
                        <h3>
                            Why join ugacssa
                        </h3>
                        <ul>
                            <li><strong>It’s fun! </strong>Meeting new people, making new friends, trying new things, and participating in activities will help you make the most of your UGA experience. </li>
                            <li><strong>Improve Resume.</strong> Being involved in CSSA make you a stronger and more well-rounded candidate for internships, co-ops, graduate schools, job opportunities, etc</li>
                            <li><strong>Build the community.</strong>The purpose of Chinese Students and Scholars Association is to promote social interactions between Chinese and other ethnic groups, and provide social and academic support to the UGA Chinese student population.</li>
                            <li><strong>Leadership skills.</strong>From hosting the events, CSSA will provide you opportunities to learn the best way to communicate with both individuals and large groups</li>
                        </ul>
                        <Link to="joinus" className={styles.joinUs}>
                            Join Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
