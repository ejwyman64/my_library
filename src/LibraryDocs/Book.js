import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Book extends Component {
    render() {
        if (this.props.title) {
            return (
                <div className="bookElement">
                    <div className="bookInfo">
                        <h4 name="title" className="title">Title: {this.props.title}</h4>
                        <h5 name="authors" className="author">Author: {this.props.authors}</h5>
                        <h5 name="pageCount" className="pageCount">Length: {this.props.pageCount} pages</h5>
                        <h5 name="publisher" className="publisher">Publisher: {this.props.publisher}</h5>
                        <h5 name="publishedDate" className="publishedDate">Date Published: {this.props.publishedDate}</h5>
                        <h5 name="categories" className="categories">Category: {this.props.categories}</h5>
                        <h5 name="language" className="language">Language: {this.props.language}</h5>
                    </div>
                    <button onClick={this.props.handleRemoveBook}>remove</button>
                </div>
            )
        } return (
            <span className="hidden"></span>
        );
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
    handleRemoveBook: PropTypes.func.isRequired
}

export default Book;