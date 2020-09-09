import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  console.log('App is render');
  return (
    <div>
      <ClickCounter nome='Matheus' />
      <HoverCounter nome='Matheus' />
    </div>

  )
}

export default App;
