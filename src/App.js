import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';

function App() {
  return (
    <div>
      <Navigation />
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
