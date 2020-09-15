import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div>
      <UserProvider value="Matheus 21">
        <ComponentC />
      </UserProvider>

    </div>

  )
}

export default App;
