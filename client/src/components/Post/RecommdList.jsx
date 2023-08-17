import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
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
  }, [])




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
    try {
      const response = await axios.get(`http://localhost:5001/post/getRecommand?_id=${postId}`);
      setRecData(response.data);
    } catch (error) {
      console.error('Error fetching embedded content:', error);
    }finally{
      
    }
  }

}
