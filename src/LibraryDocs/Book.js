import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Book extends Component {
    render() {
        return (
            <div className="bookElement">
                <div className="bookInfo">
                    <h4 name="title" className="title">Title: {this.props.title}</h4>
                    <h5 name="author" className="author">Author: {this.props.author}</h5>
                    <h5 name="pageCount" className="pageCount">Length: {this.props.pageCount} pages</h5>
                </div>
                <button onClick={this.props.handleRemoveBook}>remove</button>
            </div>
        );
    }
}


Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pageCount: PropTypes.number.isRequired,
    handleRemoveBook: PropTypes.func.isRequired
}

export default Book;