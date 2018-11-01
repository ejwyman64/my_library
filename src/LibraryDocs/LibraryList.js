import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Library from './Library';
import LibraryContainer from './LibraryContainer';

class LibraryList extends Component {

    state = {

        pendingBook: "",
        books: [
            {
                id: "101",
                title: "Sense and Sensibility",
                author: "Jane Austen",
                pageCount: 450,
            },
            {
                id: "102",
                title: "1984",
                author: "George Orwell",
                pageCount: 320,
            },
            {
                id: "103",
                title: "Enders Game",
                author: "Orson Scott Card",
                pageCount: 405,
            }
        ]
    }

    handleNewBook= e =>
        this.setState({
            pendingBook: e.target.value
        });

    newBookSubmitHandler = e => {
        e.preventDefault();
        this.setState({
            books: [
                {
                    title: this.state.pendingBook
                },
                ...this.state.books
            ],
            pendingBook: ''
        })
    }

    getTotalBooks = () => this.state.books.length;


    render() {
        return (
            <div>
                <h2>Collections</h2>
                <button>+ add Library</button>
                <div>
                    {this.props.libraries.map((library, index) =>
                        <Library
                            key={index}
                            name={library.name}
                            isEditing={library.isEditing}
                            toggleEditLibraryName={library.toggleEditLibraryName}
                            handleToggleEditing={() => this.props.toggleEditLibraryName(index)}
                            setName={text => this.props.setNameAt(text, index)}
                        />
                    )}
                </div>
                <LibraryContainer
                    books={this.state.books}
                    handleNewBook={this.state.handleNewBook}
                />
            </div>
        );
    }
}

LibraryList.propTypes = {

    libraries: PropTypes.array.isRequired,
    toggleEditLibraryName: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
};

export default LibraryList;