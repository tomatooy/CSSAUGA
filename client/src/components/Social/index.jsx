import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Social.module.css'
import SocialElement from './SocialElement'

export default function Social() {
  const {t} = useTranslation()
  return (
    <div className={styles.socialMain}>
      <div className={styles.footerHeader}>
        <h3 className={styles.redText}>
          {t('keep_in_touch')}
        </h3>
        <h1 className={styles.boldText}>
          {t('connect')}
        </h1>
      </div>
      <ul className={styles.footerSocial}>
          <SocialElement/>
        </ul>
    </div>
  )
}
