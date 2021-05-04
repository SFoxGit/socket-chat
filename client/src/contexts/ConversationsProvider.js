import React, {useContext, useState} from 'react';
import useLocalStorage from '../utils/useLocalStorage';
import { useContacts } from './ContactsProvider';

const ConversationsContext = React.createContext()

export function useConversations() {
  return useContext(ConversationsContext)
}

export function ConversationsProvider({children}) {
  const [conversations, setConversations] = useLocalStorage('Conversations', []);
  const { contacts } = useContacts();
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)

  function createConversation(recipients) {
    setConversations(prevConversations => {
      return [...prevConversations, {recipients, messages: []}]
    })
  }

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {
      const contact = contacts.find(contact => {
        return contact.id === recipient
      })
      const name = (contact && contact.name) || recipient
      return { id: recipient, name}
    })
    const selected = index === selectedConversationIndex
    return {...conversations, recipients, selected}
  })

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    selectedConversationIndex: setSelectedConversationIndex,
    createConversation
  }
  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
}
