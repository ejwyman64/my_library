import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Book extends Component {
    render() {
            return (
                <div className="bookElement">
                    <div className="bookInfo">
                        <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail} alt="Cover Art" />
                        <h4 name="title" className="title">Title: {this.props.book.volumeInfo.title}</h4>
                        <h5 name="authors" className="author">Author: {this.props.book.volumeInfo.authors}</h5>
                        <h5 name="pageCount" className="pageCount">Length: {this.props.book.volumeInfo.pageCount} pages</h5>
                        <h5 name="publisher" className="publisher">Publisher: {this.props.book.volumeInfo.publisher}</h5>
                        <h5 name="publishedDate" className="publishedDate">Date Published: {this.props.book.volumeInfo.publishedDate}</h5>
                        <h5 name="categories" className="categories">Category: {this.props.book.volumeInfo.categories[0]}</h5>
                        <h5 name="language" className="language">Language Code: {this.props.book.volumeInfo.language}</h5>
                        <h6 name="googleBookID" className="googleBookID">Google Books ID: {this.props.book.id}</h6>
                        {/* <h5 name="isbn" className="isbn">ISBN: {this.props.book.volumeInfo.industryIdentifiers.find(identifier => identifier.type === "ISBN_13")}</h5> */}

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