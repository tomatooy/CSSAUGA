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
                        UGA CSSA 是校内唯一一个中国大使馆注册备案并主要面向中国大陆学生学者的学生组织。CSSA委员会包括主席，副主席，财务官以及5位部长及40余位成员组成。如今已发展成拥有1000多名在校成员的大型非营利性学生组织。如今，我们秉承丰富雅典华人生活，弘扬中华民族文化，促进学生职业发展的三大目标，每年举办包括中秋晚会，中国文化讲座，职业招聘会，春节晚会等十余项不同形式不同内容的活动，吸引上千人次参加，影响力进一步提高。
                    </p>
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
                            Reasons to join ugacssa
                        </h3>
                        <ul>
                            <li><strong>It’s fun! </strong>Meeting new people, making new friends, trying new things, and participating in activities will help you make the most of your UGA experience. <br/><>结识新朋友，结交新朋友，尝试新事物，参加活动将帮助你充分利用你的UGA体验。</></li>
                            <li><strong>Improve Resume.</strong> Being involved in CSSA make you a stronger and more well-rounded candidate for internships, co-ops, graduate schools, job opportunities, etc<br/><>参与CSSA学生会组织活动，能帮你在求职，深造方面收获一个更强大更全面的背景</></li>
                            <li><strong>Build the community.</strong>The purpose of Chinese Students and Scholars Association is to promote social interactions between Chinese and other ethnic groups, and provide social and academic support to the UGA Chinese student population.<br/><>中国学生学者联谊会的宗旨是促进华人与其他民族之间的社会交往，并为佐治亚大学中国学生群体提供社会和学术支持  </></li>
                            <li><strong>Leadership skills.</strong>From hosting the events, CSSA will provide you opportunities to learn the best way to communicate with both individuals and large groups.<br/><>CSSA学生会提供给学生们大量机会展示，锻炼他们的交流与领导能力</></li>
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
