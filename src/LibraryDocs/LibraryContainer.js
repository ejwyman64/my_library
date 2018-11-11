import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class LibraryContainer extends Component {
  render() {
    return (
      <div className="booksContainer">
        {Object.entries(this.props.books|| {}).map(([id, book], index) => {
          const newBook = {...book, id}
          console.log(newBook);
          return <Book  
            book={newBook}
            key={index}
            deleteBookHandler={this.props.removeBook}
          />
        })}
      </div>
    );
  }
}

// The submit button is not working.

LibraryContainer.propTypes = {
  // books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
}

export default LibraryContainer;