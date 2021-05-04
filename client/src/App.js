import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import useLocalStorage from './utils/useLocalStorage';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';


function App() {
  const [id, setId] = useLocalStorage('id');
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  return (
    <>
      {id ? dashboard : <Login setId={setId} />}

    </>
  );
}

export default App;
