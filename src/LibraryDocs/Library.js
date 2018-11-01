import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


class Library extends Component {
  render() {
    return (
      <div>
        <label>My Library</label>
        <EditLibrary
          title="editLibraryButton"
          value={false}
        />
        <AddBook
          title="addBookButton"
          value={false}
        />
        <ul>
        {this.props.books.map((book, index) =>

          <Book 
            key={index}
            title={book.title}
            author={book.author}
            pageCount={book.pageCount}

            isLendable={book.isLendable}
            toggleLendable={book.toggleLendable}
            handleLendable={() => this.props.toggleLendable(index)}

            isEditing={book.isEditing}
            toggleEditBook={book.toggleEditBook}
            handleEditBook={() => this.props.toggleEditBook(index)}

            setTitle={text => this.props.setTitleAt(text, index)}
          />
        )}
        </ul>
      </div>
    );
  }
}

class EditLibrary extends Component {
  render() {
    return (
      <button className="editButton">Edit</button>
    );
  }
}

class AddBook extends Component {
  render() {
    return (
      <button className="addBook">+ Add Book</button>
    );
  }
}

Library.propTypes = {
  books: PropTypes.array.isRequired,
  toggleLendable: PropTypes.func.isRequired,
  toggleEditBook: PropTypes.func.isRequired,
  setTitleAt: PropTypes.func.isRequired
}

export default Library;