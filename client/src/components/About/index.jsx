import React from 'react'
import styles from './About.module.css'
import pic from '../../image/aboutPic.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export default function About() {
    const {t} = useTranslation()
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
            <div className={styles.main}>
                <div className={styles.bannerPic}>
                    <img className={styles.aboutImg} src={pic} alt="" />
                </div>
                <div className={styles.bannerText}>
                    <div className={styles.lowerTextWrapper}>
                        <h3>
                            {t('reasonToJoin')}
                        </h3>
                        <br />
                        <ul>
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
    )
}
