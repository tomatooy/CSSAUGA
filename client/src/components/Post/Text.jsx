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

  // async function test(){
  //   const url = "https://api.weixin.qq.com/cgi-bin/material/get_material?access_token=72_-2fyPkteV9T4oAhpsWqQKGXld2ssIEGnhndTKoCyHuFUFPpu9Ip2ZETe2vXmRN0MIln73QKIW7nm6SvC5bqcivnpY8FE3oSqPiEMTRyMN6x0PR7HE5V9689ge2UOQUfACAZBF"
  //   try {
  //     const response = axios.post(url,{"media_id" : "NjWDKlnENr-CGHNAw_ZELd2BCNB6UeXNG89K9EcyWqRfs-8IGxObbLPQX_71kQ99"})
  //     console.log(response)
  //   } catch (error) {
      
  //   }
  // }
}
