import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class LibraryContainer extends Component {
  render() {
    return (
      <div className="libraryContainer">
          {this.props.books.map((book, index) =>
            <Book
              key={index}
              title={book.title}
              author={book.author}
              pageCount={book.pageCount}
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
  removeBook: PropTypes.func.isRequired
}

export default LibraryContainer;