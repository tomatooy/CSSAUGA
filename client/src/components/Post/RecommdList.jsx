import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RecommondCard from "./RecommondCard"
import styles from "./Post.module.css"
import axios from 'axios'
export default function RecommdList() {
  const { postId } = useParams();
  const [recData, setRecData] = useState()
  const linkstyle = {
    "color": "black",
    "text-decoration": "none"
  }
  useEffect(() => {
    fetch(postId)
  }, [postId])




  return (
    <div className={styles.recListMain}>
      <h3 className={styles.moreHeader}>MORE POST</h3>
      {
        recData ? (
          recData.map((data) => {
            return (
              <a style={linkstyle} href={`/post/${data._id}`} >
                <RecommondCard data={data} />
              </a>
            )
          })) : (<></>)
      }
    </div>
  )

  async function fetch(postId) {
    const url = process.env.REACT_APP_SERVER_URL
    try {
      const response = await axios.get(`${url}post/getRecommand?_id=${postId}`);
      setRecData(response.data);
    } catch (error) {
      console.error('Error fetching embedded content:', error);
    }finally{
      
    }
  }

}
