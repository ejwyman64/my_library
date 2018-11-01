import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LibraryName extends Component {
  render() {
    if (this.props.isEditing) {
      return (
        <input
          type="text"
          value={this.props.children}
          onChange={this.props.handleEditName} />
      )
    } return (
      <span>
        {this.props.children}
      </span>
    );
  }
}

LibraryName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleEditName: PropTypes.func.isRequired
}

export default LibraryName;