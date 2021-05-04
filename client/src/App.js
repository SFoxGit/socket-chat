import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import useLocalStorage from './utils/useLocalStorage';
import { ContactsProvider } from './contexts/ContactsProvider';


function App() {
  const [id, setId] = useLocalStorage('id');
  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )
  return (
    <>
    {id ? dashboard : <Login setId={setId} />}
    
    </>
  );
}

export default App;
