import React from 'react'
import Card from 'react-bootstrap/Card';

export default function RecommondCard() {
  const cardstyle = {"max-width":"400px"}

  return (
    <div>
    <Card>
      <Card.Img variant="left" src="https://cdn.discordapp.com/attachments/940402118953668642/989613875836117032/IMG_4382.jpg" style={cardstyle}/>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
    
  </div>
  )
  
}
