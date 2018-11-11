import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import User from './User';
import LibraryList from './LibraryDocs/LibraryList';

class Home extends Component {

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
      <div className="home">
        <User />
        <NavLink role="button" className="libraryButton" to="/home/library_list">view library</NavLink>
        <Route path="/home/library_list" render={() =>
          <LibraryList
            libraries={this.state.libraries}
            toggleEditLibraryName={this.toggleEditLibraryName}
            setNameAt={this.setNameAt}
          />}
        />
      </div>
    )
  }
}
export default Home;