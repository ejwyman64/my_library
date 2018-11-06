import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class LibraryContainer extends Component {
  render() {
    return (
      <div className="libraryContainer">
        {console.log(Object.values(this.props.books))}
        {Object.values(this.props.books).map((book, index) =>
          <Book 
            book={book}
            key={index}
            handleRemoveBook={() => this.props.removeBook(index)}
          />
        )}
      </div>
    );
  }
}

// The submit button is not working.

LibraryContainer.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
}

export default LibraryContainer;