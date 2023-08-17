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
    try {
      const res =  await axios.get("https://test-backend-oy-568f2cb4e272.herokuapp.com/post/get")
      setEvent(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
}
