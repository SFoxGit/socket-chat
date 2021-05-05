import React, { useCallback, useState } from 'react'
import { Button, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import { useConversations } from '../../contexts/ConversationsProvider'

export default function OpenConversation() {
  const [text, setText] = useState('')
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, []);
  const { sendMessage, selectedConversation } = useConversations()
  function handleSubmit(e) {
    e.preventDefault()

    sendMessage(selectedConversation.recipients.map(r => r.id), text)
    setText('')
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className=" d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end' : ''}`}
              >
                <div className={`rounded-top px-2 py-1 ${message.fromMe ? 'rounded-left bg-primary text-white mr-4' : 'border rounded-right ml-4'}`}>{message.text}</div>
                <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>{message.fromMe ? 'You' : message.senderName}</div>
              </div>
            )
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="m-2">
          <InputGroup>
            <FormControl
              as="textarea"
              required
              value={text}
              onChange={e => setText(e.target.value)}
              style={{ height: '75px', resize: 'none' }}
            />
            <InputGroup.Append>
              <Button type="submit">Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  )
}
