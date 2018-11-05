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
            authors={book.authors}
            pageCount={book.pageCount}
            publisher={book.publisher}
            publishedDate={book.publishedDate}
            categories={book.categories}
            language={book.language}
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