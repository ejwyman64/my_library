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
      <div className="content">
        <User />
        <div>
          <NavLink role="button" className="btn btn-outline-info btn-sm" to="/home/library_list">View Library</NavLink>
        </div>
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