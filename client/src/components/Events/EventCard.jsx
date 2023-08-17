import React from 'react'
import styles from './Event.module.css'
import { Link } from 'react-router-dom'

export default function Event(props) {
  const {eventData} = props
  const {coverUrl,createdAt,header,title,_id} = eventData
  const style = {"text-decoration": "none" };
  const formattedDate = createdAt.split('T')[0];

  return (
    <div className={styles.event}>
      <Link to={`/post/${_id}`} style = {style}>
      <div className={styles.eventPic}>
        <img src={coverUrl} alt="ss" />
        <div className={styles.eventTitleWrap}>
        <h3 className={styles.eventTitle}>{title}</h3>
          <h5 className={styles.eventDate}>{formattedDate}</h5>
          
        </div>
      </div>
      <div className={styles.eventDescription}>
        {header}
      </div>
      </Link>
    </div>
  )
}
