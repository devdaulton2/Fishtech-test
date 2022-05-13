import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Sitebar from './Components/Sitebar';
import Home from './Components/Home'
import ApiFetch from './Components/ApiFetch';
import Input from './Components/Input';

function App() {

  function componentDidMount() {
    document.title = "Fishtech Group App"
  }

  componentDidMount();
  
  return (
    <div className="App">
      <Sitebar />
      <Home />
      <Input />
      <ApiFetch />
    </div>
  );
}

export default App;
