import React, { Component } from 'react';
import PropTypes from 'prop-types';



class BookName extends Component {
    render() {
        if (this.props.isEditing) {
            return (
                <input 
                type="text" 
                value={this.props.children}
                onChange={this.props.handleEditTitle} />
            )
        } return (
            <span>
                {this.props.children}
            </span>
        );
    }
}


BookName.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleEditTitle:PropTypes.func.isRequired
}

export default BookName;