import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Library from './Library';
import LibraryContainer from './LibraryContainer';

class LibraryList extends Component {

    state = {
        pendingBook: "",

        books: [
            {
                title: "Sense and Sensibility",
                author: "Jane Austen",
                pageCount: 450
            },
            {
                title: "1984",
                author: "George Orwell",
                pageCount: 320
            },
            {
                title: "Enders Game",
                author: "Orson Scott Card",
                pageCount: 405
            }
        ]
    }

    handleNewBook = e =>
        this.setState({ pendingBook: e.target.value});

    newBookSubmitHandler = e => {
        e.preventDefault();
        if (this.state.pendingBook !== [{title: "", author: "", pageCount: ""}]) {
            const newBook = {
                title: this.state.pendingBook,
                author: "Great Success",
                pageCount: 200
            };
            this.setState(prevState => ({
                books: [newBook, ...prevState.books],
                pendingGuest: ""
            }));
        }
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
                <div>
                    <form onSubmit={this.newBookSubmitHandler}>
                        <input
                            type="text"
                            name="title"
                            value={this.state.pendingBook}
                            onChange={this.handleNewBook}
                            placeholder="title" />
                        <button type="submit" name="submit" value="submit">Add Book</button>
                    </form>
                    <LibraryContainer
                        books={this.state.books}
                    />
                </div>
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