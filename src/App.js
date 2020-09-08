import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  console.log('App is render');
  return (
    <div>
      <Hero heroName='Batman' />
      <ErrorBoundary >

        <Hero heroName='Superman' />
        <Hero heroName='Joker' />
      </ErrorBoundary>
    </div>

  )
}

export default App;
