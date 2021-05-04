import React, { useRef } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'

export default function Login({setId}) {
  const idRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    setId(idRef.current.value)

  }
  function createNewId() {
    setId(uuidV4())
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
            <Button onClick={createNewId} variant="secondary">Create A New ID</Button>
          </Form>
        </Row>
      </Container>
    </div>
  )
}
