import React, { useState } from 'react'
import { Button, Form, FormCheck, FormGroup, ModalBody } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { useContacts } from '../../contexts/ContactsProvider';
import {useConversations} from '../../contexts/ConversationsProvider'

export default function NewConversationModal({closeModal}) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const {contacts} = useContacts();
  const { createConversation } = useConversations()

  function handleCheckboxChange(contactId) {
    setSelectedContactIds(prevSelectedContactIds => {
      if(prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter(prevId => {
          return contactId !== prevId
        })
      } else {
        return [...prevSelectedContactIds, contactId]
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    createConversation(selectedContactIds)
    closeModal()
  }
  return (
    <>
      <ModalHeader closeButton>Create Conversation</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
        {contacts.map(contact => (
          <FormGroup controlId={contact.id} key={contact.id}>
            <FormCheck 
            type="checkbox"
            value={selectedContactIds.includes(contact.id)}
            label={contact.name}
            onChange={() => handleCheckboxChange(contact.id)}
            />
          </FormGroup>
        ))}
        <Button type="submit">Create</Button>
        </Form>
      </ModalBody>
    </>
  )
}
