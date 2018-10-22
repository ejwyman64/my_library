import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.png';

class App extends Component {
  state = {
    user: [],
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Img-border">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1 className="App-title">Welcome to NOVELINK</h1>
        </header>
      </div>
    );
  }
}

export default App;
