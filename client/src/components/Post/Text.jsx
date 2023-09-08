import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Post.module.css'


export default function Content() {
  const [embeddedContent, setEmbeddedContent] = useState();
  const [loading,setLoading] = useState(true)
  const { postId } = useParams();


  useEffect(()=>{
    fetch()
   
  },[])
 
  return (
    <div className={styles.contentMain}>
       {loading ? <p>Loading...</p> : null}
      {embeddedContent && <div dangerouslySetInnerHTML={{ __html: embeddedContent }} />}
    </div>
  );

  async function fetch() {
    const url = process.env.REACT_APP_SERVER_URL

    try {
      setLoading(true)
      setEmbeddedContent("")
      const response = await axios.get(`${url}post/getsingle?_id=${postId}`);
      setEmbeddedContent(response.data);
    } catch (error) {
      console.error('Error fetching embedded content:', error);
    }finally{
      setLoading(false)
    }
  }
}
