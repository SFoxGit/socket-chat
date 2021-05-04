import React from 'react';
import Login from './components/Login';
import useLocalStorage from './utils/useLocalStorage';


function App() {
  const [id, setId] = useLocalStorage('id')
  return (
    <>
    {id}
    <Login setId={setId} />
    </>
  );
}

export default App;
