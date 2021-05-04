import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import useLocalStorage from './utils/useLocalStorage';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from './contexts/ConversationsProvider';


function App() {
  const [id, setId] = useLocalStorage('id');
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )
  return (
    <>
      {id ? dashboard : <Login setId={setId} />}

    </>
  );
}

export default App;
