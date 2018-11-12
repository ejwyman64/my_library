import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchedBook extends Component {
    render() {
        if (this.props.book) {
            return (
                <div className="bookElement">
                    <img src={this.props.book.image} alt="Cover Art" />
                    <div className="bookInfoText">
                        <h4 name="title" className="title">Title: {this.props.book.title}</h4>
                        <h5 name="authors" className="author">Author: {this.props.book.author}</h5>
                        <h5 name="pageCount" className="pageCount">Length: {this.props.book.pageCount} pages</h5>
                        <h5 name="publisher" className="publisher">Publisher: {this.props.book.publisher}</h5>
                        <h5 name="publishedDate" className="publishedDate">Date Published: {this.props.book.publishDate}</h5>
                        <h5 name="categories" className="categories">Category: {this.props.book.category}</h5>
                        <h5 name="language" className="language">Language Code: {this.props.book.language}</h5>
                        <h6 name="googleBookID" className="googleBookID">Google Books ID: {this.props.book.googleBooksID}</h6>
                    </div>
                    <button onClick={this.props.handleAddBook}>+ add book</button>
                </div>
            )
        } return (
            <span className="hidden"></span>
        );
    }

}

// this.props.book.volumeInfo.industryIdentifiers.find(identifier => identifier.type === "ISBN_13").identifier

SearchedBook.propTypes = {
    book: PropTypes.object.isRequired,
    handleAddBook: PropTypes.func.isRequired
}

export default SearchedBook;