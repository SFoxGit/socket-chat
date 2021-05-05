import React, { useState } from 'react'
import { Nav, TabContainer, NavItem, NavLink, TabContent, TabPane, Button, Modal } from 'react-bootstrap'
import Conversations from '../Conversations'
import Contacts from '../Contacts'
import NewContactModal from '../NewContactModal'
import NewConversationModal from '../NewConversationModal'

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';


export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY
  const [modalOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false)
  }
  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <TabContainer activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <NavItem>
            <NavLink eventKey={CONVERSATIONS_KEY}>Conversations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={CONTACTS_KEY}>Contacts</NavLink>
          </NavItem>
        </Nav>
        {conversationsOpen ?
          <TabContent className="border-right overflow-auto flex-grow-1">
            <TabPane eventKey={CONVERSATIONS_KEY} >
              <Conversations />
            </TabPane>
          </TabContent>
          :
          <TabContent className="border-right overflow-auto flex-grow-1">
            <TabPane eventKey={CONTACTS_KEY} >
              <Contacts />
            </TabPane>
          </TabContent>
        }
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button>
      </TabContainer>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ?
          <NewConversationModal closeModal={closeModal} /> :
          <NewContactModal closeModal={closeModal} />
        }
      </Modal>
    </div>
  )
}
