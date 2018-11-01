import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LibraryName from './LibraryName';

class Library extends Component {
  render() {
    return (
      <div className="library">
        <LibraryName
          isEditing={this.props.isEditing}
          handleEditName={e => this.props.setName(e.target.value)}>
          {this.props.name}
        </LibraryName>
        <button onClick={this.props.handleToggleEditing}>edit</button>
      </div>
    );
  }
}


Library.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
}

export default Library;