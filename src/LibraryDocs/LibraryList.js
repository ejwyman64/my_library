import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Library from './Library';
import LibraryContainer from './LibraryContainer';
import Axios from 'axios';

class LibraryList extends Component {

    state = {
        pendingBook: "",

        books: {}
    }

    componentDidMount() {
        Axios.get(`https://my-library-220222.firebaseio.com/books.json`)
        .then(res => this.setState({books: res.data}))
    }

    // sendBookToLibrary = e => {

    //     fetch('https://my-library-220222.firebaseio.com/books.json', {
    //         method: 'POST',
    //     }

    newBookSubmitHandler = e => {
        e.preventDefault();
        const newBook = {
            title: e.target.elements.title.value,
            authors: e.target.elements.authors.value,
            publisher: e.target.elements.publisher.value,
            publishedDate: e.target.elements.publishedDate.value,
            categories: e.target.elements.categories.value,
            pageCount: e.target.elements.pageCount.value,
            language: e.target.elements.language.value,
            isbn: e.target.elements.isbn.value
        }
        e.target.reset();
        this.setState(prevState => ({
            books: [newBook, ...prevState.books],
            pendingBook: ""
        }));
    }


    removeBook = index => {
        this.setState({
            books: [
                ...this.state.books.slice(0, index),
                ...this.state.books.slice(index + 1)
            ]
        });
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
                        <input required
                            type="text"
                            name="title"
                            placeholder="title" />

                        <input required
                            type="text"
                            name="authors"
                            placeholder="author" />

                        <input required
                            type="text"
                            name="publisher"
                            placeholder="publisher" />

                        <input required
                            type="text"
                            name="publishedDate"
                            placeholder="published date" />

                        <input required
                            type="text"
                            name="categories"
                            placeholder="category" />

                        <input required
                            type="number"
                            name="pageCount"
                            placeholder="page count" />

                        <input required
                            type="text"
                            name="language"
                            placeholder="language" />

                        <input required
                            type="text"
                            name="isbn"
                            placeholder="ISBN number" />
                        <button type="submit" name="submit" value="submit">Add Book</button>
                    </form>
                    <LibraryContainer
                        books={this.state.books}
                        removeBook={this.removeBook}
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