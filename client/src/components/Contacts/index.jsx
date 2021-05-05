import React, { useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { useContacts } from '../../contexts/ContactsProvider'

export default function Contacts() {
  const {contacts} = useContacts();
  const [selectedContact, setSelectedContact] = useState();


  return (
    <ListGroup variant="flush" className="align-items-start">
      {contacts.map(contact => (
        <ListGroupItem onClick={() => setSelectedContact(contact.id)} key={contact.id} className="w-100">
          {selectedContact === contact.id ? contact.name + ': ' + contact.id : contact.name}
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}
