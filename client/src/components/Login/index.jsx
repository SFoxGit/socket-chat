import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default function Login({setId}) {
  const idRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    setId(idRef.current.value)

  }

  return (
    <div>
      <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
        <Row className="w-100">
          <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group >
              <Form.Label>Enter your ID</Form.Label>
              <Form.Control type="text" ref={idRef} required></Form.Control>
            </Form.Group>
            <Button type="submit" className="mr-2">Login</Button>
            <Button variant="secondary">Create A New ID</Button>
          </Form>
        </Row>
      </Container>
    </div>
  )
}
