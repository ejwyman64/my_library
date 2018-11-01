import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class LibraryContainer extends Component {
  render() {
    return (
      <div className="libraryContainer">
        <form onSubmit={this.props.newBookSubmitHandler}>
          <input
            type="text"
            value={this.props.pendingBook}
            onChange={this.props.handleNewBook}
            placeholder="Search ISBN" />
          <button type="submit" name="submit" value="submit">Add Book</button>
        </form>
        <div>
          {this.props.books.map((book, index) =>
            <Book
              key={index}
              title={book.title}
              author={book.author}
              pageCount={book.pageCount}
            />
          )}
        </div>
      </div >
    );
  }
}


LibraryContainer.propTypes = {
  books: PropTypes.array.isRequired,
}

export default LibraryContainer;