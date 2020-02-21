import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import Post from './components/Post';
import Profile from './pages/Profile';

function App() {
  return (
    <div >
      <Navigation />
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Post /> */}
      <Profile />
    </div>
  );
}

export default App;
