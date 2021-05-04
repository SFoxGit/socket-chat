import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import useLocalStorage from './utils/useLocalStorage';


function App() {
  const [id, setId] = useLocalStorage('id')
  return (
    <>
    {id ? <Dashboard id={id} /> : <Login setId={setId} />}
    
    </>
  );
}

export default App;
