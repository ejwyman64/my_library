import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchedBook extends Component {
    render() {
        if (this.props.book) {
            return (
                <div className="bookElement">
                    <div className="bookInfo">
                        {/* <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail} alt="Cover Art" /> */}
                        <h6 name="isbn" className="isbn">Book ID: {this.props.book.id}</h6>
                        <h4 name="title" className="title">Title: {this.props.book.volumeInfo.title}</h4>
                        <h5 name="authors" className="authors">Author: {this.props.book.volumeInfo.authors[0]}</h5>


                    </div>
                    <button onClick={this.props.handleAddBook}>+ Add Book</button>
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