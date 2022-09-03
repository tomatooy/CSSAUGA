import React from 'react'
import styles from './Event.module.css'
import Event from './Event'
export default function Events() {
  return (
    <div className={styles.eventsWrapper}>
        <div className={styles.eventHeader}>LATEST EVENTS</div>
        <div className={styles.mainDisplay}>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
        </div>
    </div>
    
  )
}
