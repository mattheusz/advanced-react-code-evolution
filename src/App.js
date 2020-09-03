import React from 'react';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  console.log('App is render');
  return (
    <ParentComponent />
  )
}

export default App;
