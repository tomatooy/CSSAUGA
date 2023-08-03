import React from 'react'
import styles from './Event.module.css'

export default function Event() {
  return (

    <div className={styles.event}>
      <div className={styles.eventPic}>
        <img src="https://cdn.discordapp.com/attachments/940402118953668642/994292689795297360/unknown.png" alt="ss" />
        <div className={styles.eventTitleWrap}>
          <h3 className={styles.eventDate}>EVENT DATE</h3>
          <h3 className={styles.eventTitle}>EVENT TITLE</h3>
        </div>
      </div>
      <div className={styles.eventDescription}>
        Congratulations to University of Georgia Honors student Elise Karinshak who received the 2022 Goldwater Scholar award!
      </div>
    </div>
  )
}
