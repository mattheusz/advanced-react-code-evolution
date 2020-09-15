import React from 'react';
import './App.css';
import UserList from "./components/UserList";
import UserForm from './components/UserForm';

function App() {
  return (
    <div>
      <UserList />
      <hr />
      <UserForm />
    </div>

  )
}

export default App;
