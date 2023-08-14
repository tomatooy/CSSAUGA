import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './joinform.css'



export default function JoinForm() {
    let [isMobile,changeMobile] = useState()
 
    function handleResize(){
        isMobile = window.innerWidth>600? changeMobile(Col): changeMobile(Row)
    }
    useEffect(()=>{
        handleResize()
        window.addEventListener('resize', handleResize);
    },[])
    return (
        <div className="form">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={isMobile}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={isMobile} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                </Row>
                <Row>
                    <Form.Group as={isMobile} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group as={isMobile} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Major</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Group as={isMobile} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Year</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>
                </Row>
                <Row>
                <Form.Group>
                    <Form.Label>What department and Why</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </Form.Group>
                </Row>
                <br/>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
