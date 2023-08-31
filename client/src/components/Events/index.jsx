import React from 'react'
import styles from './Event.module.css'
import Event from './EventCard'
import axios from 'axios'

export default function Events() {
  const[eventData,setEvent] = React.useState()
  React.useEffect(() => {
    fectch()
  }, [])

  return (
    <div className={styles.eventsWrapper}>
      <div className={styles.eventHeader}>LATEST POSTS</div>
      <div className={styles.mainDisplay}>
        {
          eventData?(
          eventData.map((event)=>{
            return <Event eventData={event}/>
          })):(<>No Event</>)
        }
      </div>
    </div>

  )


 async function fectch(){
  const url = process.env.REACT_APP_SERVER_URL
    try {
      const res =  await axios.get(`${url}post/get`)
      setEvent(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
}
