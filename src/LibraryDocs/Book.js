import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookTitle from './BookTitle';



class Book extends Component {
    render() {
        return (
            <li className="bookElement">
                <ul className="bookInfo">
                    <BookTitle 
                        isEditing={this.props.isEditing}
                        handleEditTitle={e => this.props.setTitle(e.target.value)}>
                        {this.props.title}</BookTitle>
                    <li className="author">{this.props.author}</li>
                    <li className="pageCount">{this.props.pageCount}</li>
                </ul>
                <label>
                <input 
                    type="checkbox" 
                    checked={this.props.isLendable} 
                    onChange={this.props.handleLendable}
                    />Available to Lend
                </label>
                <button onClick={this.props.handleEditBook}>edit</button>
                <button>remove</button>
            </li>
        );
    }
}


Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pageCount: PropTypes.number.isRequired,

    isLendable: PropTypes.bool.isRequired,
    handleLendable: PropTypes.func.isRequired,

    isEditing: PropTypes.bool.isRequired,
    handleEditBook: PropTypes.func.isRequired,

    setTitle: PropTypes.func.isRequired
}

export default Book;