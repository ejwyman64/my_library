import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchedBook extends Component {
    render() {
        if (this.props.book) {
            return (
                <div className="bookElement">
                    <div className="bookInfo">
                        <h5 name="isbn" className="isbn">book ID: {this.props.book.id}</h5>
                        <h5 name="title" className="title">title: {this.props.book.volumeInfo.title}</h5>

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