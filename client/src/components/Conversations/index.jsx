import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { useConversations } from '../../contexts/ConversationsProvider'

export default function Conversations() {
  const {conversations} = useConversations()
  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroupItem key={index}>
          {conversation.recipients.map(r => r.name).join(', ')}
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}
