import React from 'react'
import ExpandNav from './ExpandNav'
import styles from './Detail.module.css'

export default function Contact() {
  return (
    <div>
      <div className={styles.detailMain}>
        <ExpandNav/>
      </div>
    </div>
  )
}