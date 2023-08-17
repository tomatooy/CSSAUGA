import React from 'react'
import styles from './Event.module.css'
import { Link } from 'react-router-dom'

export default function Event(props) {
  const { eventData } = props
  const { coverUrl, createdAt, header, title, _id } = eventData
  const style = { "text-decoration": "none" };
  const formattedDate = createdAt && createdAt.split('T')[0] ;

  return (
    <div className={styles.event}>
      <Link to={`/post/${_id}`} style={style}>
        <div className={styles.eventPic}>
          <img src={coverUrl} alt="ss" />
        </div>
        <div className={styles.eventDescription}>
          <h3 className={styles.eventTitle}>{title}</h3>
          <p className={styles.eventDate}>{formattedDate}</p>
          {header}
        </div>
      </Link>
    </div>
  )
}
