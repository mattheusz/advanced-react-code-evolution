import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import User from './components/User';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
  console.log('App is render');
  return (
    <div>
      <Counter render={(count, increment) => {
        return <ClickCounter count={count} increment={increment} />
      }} />
      <hr />

      <Counter render={(count, increment) => {
        return <HoverCounter count={count} increment={increment} />
      }} />
      <hr />

      <User render={(isLogged) => isLogged ? 'Matheus' : 'Guest'} />
    </div>

  )
}

export default App;
