import React from 'react'
import styles from './Event.module.css'
import { Link } from 'react-router-dom'

export default function Event(props) {
  const {eventData} = props
  const {coverUrl,createdAt,text,title,_id} = eventData
  const style = {"text-decoration": "none" };

  return (
    <div className={styles.event}>
      <Link to={`/post/${_id}`} style = {style}>
      <div className={styles.eventPic}>
        <img src={coverUrl} alt="ss" />
        <div className={styles.eventTitleWrap}>
          <h3 className={styles.eventDate}>{eventData.createdAt}</h3>
          <h3 className={styles.eventTitle}>{title}</h3>
        </div>
      </div>
      <div className={styles.eventDescription}>
        Congratulations to University of Georgia Honors student Elise Karinshak who received the 2022 Goldwater Scholar award!
      </div>
      </Link>
    </div>
  )
}
