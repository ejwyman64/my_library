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

    //runs the function to get books from firebase.
    componentDidMount() {
        this.getBooks()
    }


    //removes book from the firebase database.
    removeBook = id => {
        console.log(id);
        Axios.delete(`https://my-library-220222.firebaseio.com/books/${id}.json`)
            .then(this.getBooks)
    }

    // retrieves book information from firebase.
    getBooks = async () => {
        return Axios.get(`https://my-library-220222.firebaseio.com/books.json`)
            .then(res => this.setState({ books: res.data }));
    }

    // sendBookToLibrary = e => {

    //     fetch('https://my-library-220222.firebaseio.com/books.json', {
    //         method: 'POST',
    //     }


    //posts the book information that was manually created by the user in firebase.
    newBookSubmitHandler = e => {
        e.preventDefault();
        const newBook = {
            title: e.target.elements.title.value,
            author: e.target.elements.authors.value,
            publisher: e.target.elements.publisher.value,
            publishedDate: e.target.elements.publishedDate.value,
            categories: e.target.elements.categories.value,
            pageCount: e.target.elements.pageCount.value,
            language: e.target.elements.language.value,
            image: e.target.elements.coverImage.value
        }
        e.target.reset();
        Axios.post(`https://my-library-220222.firebaseio.com/books.json`, newBook)
            .then(this.getBooks);
    }


    //will list total number of books
    // getTotalBooks = () => this.state.books.length;


    render() {
        return (
            <div className="libraries">
                {/* <h2>Collections</h2> */}
                {/* <button>+ add Library</button> */}
                <form className="manualAddForm" onSubmit={this.newBookSubmitHandler}>
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
                        name="coverImage"
                        placeholder="Image URL" />
                    <button type="submit" name="submit" value="submit">add book</button>
                </form>
                <div className="libraryBorder">
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