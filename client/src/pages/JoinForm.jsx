import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './joinform.css'
import { PhoneNumberInput } from '../api/api';
import axios from 'axios';
import joinpic from '../image/join.jpg'

export default function JoinForm() {
    let [isMobile, changeMobile] = useState()
    const initData = {
        name: '',
        email: '',
        phone: '',
        major: '',
        year: '',
        text: '',
        date: ''
    }

    const picStyle = {
        "maxHeight": "200px",
        "maxWidth":"90%"
    }
    const [formData, updateFormData] = useState(initData)

    function handleResize() {
        isMobile = window.innerWidth > 600 ? changeMobile(Col) : changeMobile(Row)
    }
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);
    },)

    const handleSubmit = async (event) => {
        event.preventDefault()
        updateFormData({ ...formData, date: new Date() })
        const res = await axios.post('http://localhost:5001/joinus', formData)
        const { status } = res
        if (status === 200) {
            alert("Submitted! We be in touch with you soon")
            updateFormData(initData)
        }
        else {
            alert("Something went wrong, Try again")
            console.log("err:" + res.data.message)
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        updateFormData({ ...formData, [name]: value })
    }
    const handlePhoneNumber = (event) => {
        const { value } = event.target
        updateFormData({ ...formData, phone: PhoneNumberInput(value) })
    }

    return (
        <div className="form">
            <img src={joinpic} style={picStyle} />
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={isMobile}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Name" name='name' value={formData.name} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group as={isMobile} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleInputChange} required />
                    </Form.Group>

                </Row>
                <Row>
                    <Form.Group as={isMobile} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder="123-456-7890" name='phone' value={formData.phone} onChange={handlePhoneNumber} required />
                    </Form.Group>

                    <Form.Group as={isMobile} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Major</Form.Label>
                        <Form.Control placeholder="Major" name='major' value={formData.major} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group as={isMobile} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Year</Form.Label>
                        <Form.Control placeholder="Year" name='year' value={formData.year} onChange={handleInputChange} required />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={isMobile} className="mb-3">
                        <Form.Label>Tell us about you!</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Why join us, What deparment, what you insterested in, etc"
                            style={{ height: '100px' }}
                            name='text'
                            value={formData.text}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                </Row>
                <br />


                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
