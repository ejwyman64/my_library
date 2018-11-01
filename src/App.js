// import ReactBootstrap from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.js';
import './Styles/App.css';
import Header from './Header';
import User from './User';
import LibraryList from './LibraryDocs/LibraryList';

class App extends Component {

  state = {
    libraries: [
      {
        name: "My Library",
        isEditing: false
      }
    ],
  }



  //Library functions ----------------------
  //toggle library options
  toggleLibraryOptions = (property, indexToChange) =>
    this.setState({
      libraries: this.state.libraries.map((library, index) => {
        if (index === indexToChange) {
          return {
            ...library,
            [property]: !library[property]
          };
        }
        return library;
      })
    });

  toggleEditLibraryName = index =>
    this.toggleLibraryOptions("isEditing", index);

  //edit library name.
  setNameAt = (name, indexToChange) =>
    this.setState({
      libraries: this.state.libraries.map((library, index) => {
        if (index === indexToChange) {
          return {
            ...library,
            name
          };
        }
        return library;
      })
    });

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="content">
            <User />
            <LibraryList
              libraries={this.state.libraries}
              toggleEditLibraryName={this.toggleEditLibraryName}
              setNameAt={this.setNameAt}
            />
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
