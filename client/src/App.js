import React, { useState } from 'react';
import Login from './components/Login';


function App() {
  const [id, setId] = useState()
  return (
    <>
    <Login setId={setId} />
    </>
  );
}

export default App;
