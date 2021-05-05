import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { useConversations } from '../../contexts/ConversationsProvider'

export default function Conversations() {
  const {conversations, selectedConversationIndex} = useConversations()
  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroupItem 
        key={index}
        action
        className="w-100"
        onClick={() => selectedConversationIndex(index)}
        active={conversation.selected}
        >
          {conversation.recipients.map(r => r.name).join(', ')}
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}
