import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Login from './pages/authentication/Login';

function App() {
  return (
    <div>
      <Navigation />
      <Login />
    </div>
  );
}

export default App;
