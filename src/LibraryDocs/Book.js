import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Book extends Component {
    render() {
            return (
                <div className="bookElement">
                    <div className="bookInfo">
                        <h4 name="title" className="title">Title: {this.props.book.volumeInfo.title}</h4>
                        <h5 name="authors" className="author">Author: {this.props.book.authors}</h5>
                        <h5 name="pageCount" className="pageCount">Length: {this.props.book.pageCount} pages</h5>
                        <h5 name="publisher" className="publisher">Publisher: {this.props.book.publisher}</h5>
                        <h5 name="publishedDate" className="publishedDate">Date Published: {this.props.book.publishedDate}</h5>
                        <h5 name="categories" className="categories">Category: {this.props.book.categories}</h5>
                        <h5 name="language" className="language">Language: {this.props.book.language}</h5>
                        <h5 name="isbn" className="isbn">ISBN: {this.props.book.isbn}</h5>

                    </div>
                    <button onClick={this.props.handleRemoveBook}>remove</button>
                </div>
            )
    }

}


Book.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    pageCount: PropTypes.number.isRequired,
    publisher: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    handleRemoveBook: PropTypes.func.isRequired
}

export default Book;