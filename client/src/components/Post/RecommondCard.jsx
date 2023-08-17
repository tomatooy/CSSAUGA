import React from 'react'
import Card from 'react-bootstrap/Card';
import styles from './Post.module.css'
import { Link } from 'react-router-dom';
export default function RecommondCard(props) {
 

  console.log(props)
  const {coverUrl,title,createdAt} = props.data
  return (
    <>
    <Card className={styles.card}>
      <Card.Img variant="left" src={coverUrl} className={styles.cardImg} />
      <Card.Body>
        <Card.Text>
          {title}
        </Card.Text>
        <Card.Text>
          {createdAt}
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
    </>

  )
  
}
