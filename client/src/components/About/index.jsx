import React, { useEffect } from 'react'
import styles from './About.module.css'
import pic from '../../image/aboutPic.jpg'
import pic1 from '../../image/aboutPic1.jpg'
import pic2 from '../../image/aboutPic2.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export default function About() {
    const fromLeft = {
        transform: "translateX(-50%)",
        opacity: '0',
        transition: '1.0s all ease'
    }
    const fromRight = {
        transform: "translateX(50%)",
        opacity: '0',
        transition: '1.0s all ease'
    }
    useEffect(() => {
        function reveal() {
            const moveElement = document.querySelectorAll('#moveEle')
            for (var ele of moveElement) {
                var windowHeight = window.innerHeight;
                var elementTop = ele.getBoundingClientRect().top;
                console.log(elementTop)
                var elementVisible = 250;
                if (elementTop < windowHeight - elementVisible) {
                    ele.classList.add(styles.active)
                }
            }

        }

        window.addEventListener("scroll", reveal);
    }, [])

    const { t } = useTranslation()
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.bannerUpper}>
                <div className={styles.upperTextWrapper}>
                    <h1 className={styles.bannerH1}>{t('WHAT_IS_CSSA')}</h1>
                    <p>
                        {t('WHAT_IS_CSSA_des')}
                    </p>


                </div>
            </div>
            <div className={styles.mainBackground}>

                <div className={styles.main}>
                    <div className={styles.bannerPic} id="moveEle" style={fromLeft}>
                        <img className={styles.aboutImg} src={pic2} alt="" />
                    </div>
                    <div className={styles.bannerText} >
                        <div className={styles.lowerTextWrapper} >
                            <h3 id="moveEle" style={fromRight}>{t('our_mission')}</h3>
                            <p id="moveEle" style={fromRight}>{t('our_mission_d')}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.bannerText} id="moveEle" style={fromLeft}>
                        <div className={styles.lowerTextWrapper} >
                            <h3 id="moveEle" style={fromLeft}>{t('our_event')}</h3>
                            <p id="moveEle" style={fromLeft}>{t('our_event_d')}</p>
                        </div>
                    </div>
                    <div className={styles.bannerPic} id="moveEle" style={fromRight}>
                        <img className={styles.aboutImg} src={pic1} alt="" />
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles.bannerPic} id="moveEle" style={fromLeft}>
                        <img className={styles.aboutImg} src={pic} alt="" />
                    </div>
                    <div className={styles.bannerText} id="moveEle" style={fromRight} >
                        <div className={styles.lowerTextWrapper}>
                            <h3 id="moveEle" style={fromRight}>
                                {t('reasonToJoin')}
                            </h3>
                            <br />
                            <ul id="moveEle" style={fromRight}>
                                <li><strong>{t('its_fun')}: </strong>{t('its_fun_d')}</li>
                                <li><strong>{t('improve_resume')}: </strong> {t('improve_resume_d')}</li>
                                <li><strong>{t('build_community')}: </strong>{t('build_community_d')}</li>
                                <li><strong>{t('leadership')}: </strong>{t('leadership_d')}</li>
                            </ul>
                            <Link to="joinus" className={styles.joinUs}>
                                {t('join_us')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
