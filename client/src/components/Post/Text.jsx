import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './Post.module.css'


export default function Content() {
  const [embeddedContent, setEmbeddedContent] = useState();
  const [loading,setLoading] = useState(true)
  const { postId } = useParams();
  const location = useLocation()

  useEffect(()=>{
    fetch()
  },location.pathname)
 
  return (
    <div className={styles.contentMain}>
       {loading ? <p>Loading...</p> : null}
      {embeddedContent && <div dangerouslySetInnerHTML={{ __html: embeddedContent }} />}
    </div>
  );

  async function fetch() {
    
    try {
      setLoading(true)
      setEmbeddedContent("")
      const response = await axios.get(`http://localhost:5001/post/getsingle?_id=${postId}`);
      setEmbeddedContent(response.data);
    } catch (error) {
      console.error('Error fetching embedded content:', error);
    }finally{
      setLoading(false)
    }
  }
}
