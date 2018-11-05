// import ReactBootstrap from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.js';
import './Styles/App.css';
import Header from './Header';
import Home from './Home';
import Search from './Search';
import About from './About';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="content">
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
