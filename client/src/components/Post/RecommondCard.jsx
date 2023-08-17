import React from 'react'
import Card from 'react-bootstrap/Card';
import styles from './Post.module.css'
export default function RecommondCard(props) {
 
  const {coverUrl,title,createdAt} = props.data
  return (
    <>
    <Card className={styles.card}>
      <Card.Img variant="left" src={coverUrl} className={styles.cardImg} />
      <Card.Body className={styles.cardBody}>
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
