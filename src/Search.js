import React, { Component } from 'react';
import axios from 'axios';
import SearchedBook from './SearchedBook';


class Search extends Component {

    state = {
        searchQuery: []
    }
    
    // this function does lots of cool things.
    // First: it gets the info for up to 10 books based on what you searched in the search input.
    submitHandlerSearch = (e) => {
        e.preventDefault();
        const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${e.target.elements.searchInput.value}`;
        axios.get(searchUrl).then(response => {
            this.setState({
                // Second: it filters out responses that are lacking key contents, like a picture or an author.
                searchQuery: response.data.items.filter(book => 
                    book.id &&
                    book.volumeInfo.categories &&
                    book.volumeInfo.categories[0] &&
                    book.volumeInfo.imageLinks.smallThumbnail &&
                    book.volumeInfo.authors
                    ).map(book => {
                        // Third: it restructures that info into an object that matches the firebase objects (so when you add it to firebase it is formatted the same).
                        return {
                            title: book.volumeInfo.title,
                            author: book.volumeInfo.authors,
                            category: book.volumeInfo.categories[0],
                            image: book.volumeInfo.imageLinks.smallThumbnail,
                            publisher: book.volumeInfo.publisher,
                            publishDate: book.volumeInfo.publishedDate,
                            language: book.volumeInfo.language,
                            pageCount: book.volumeInfo.authors,
                            googleBooksID: book.id
                        }
                    })
            });
        }).catch(error => {
            // and it has a nice error if something didn't work out :D
            console.log('Error fetching and parsing data.', error)
        });
    }

    // This function adds the book that you selected to your firebase database.
    addBook = book => {
        axios.post(`https://my-library-220222.firebaseio.com/books.json`, book);
        alert("Yay! Your book has been added to your library!");
    }

    render() {
        return (
            <div className="search">
                <h1>Search for Books!</h1>
                <h2>Find your books and add them to your library list.</h2>
                <h3>Use these search guides to help you find what you are looking for. The books you search for will appear below the search bar. When you add a book you should get an alert confirming that the book was added to your library.</h3>
                <ul className="searchGuide">
                    <li><span>intitle:</span> Returns results where the text following this keyword is found in the title.</li>
                    <li><span>inauthor:</span> Returns results where the text following this keyword is found in the author.</li>
                    <li><span>inpublisher:</span> Returns results where the text following this keyword is found in the publisher.</li>
                    <li><span>subject:</span> Returns results where the text following this keyword is listed in the category list of the volume.</li>
                    <li><span>isbn:</span> Returns results where the text following this keyword is the ISBN number.</li>
                    <li><span>lccn:</span> Returns results where the text following this keyword is the Library of Congress Control Number.</li>
                    <li><span>oclc:</span> Returns results where the text following this keyword is the Online Computer Library Center number.</li>
                </ul>
                <form className="searchForm" onSubmit={this.submitHandlerSearch}>
                    <input required
                        type="text"
                        name="searchInput"
                        placeholder="title, author, publisher, isbn, etc." />
                    <button type="submit" name="submit" value="submit">search</button>
                </form>
                <div className="booksContainer">
                    {this.state.searchQuery.map((book, index) =>
                        <SearchedBook
                            key={index}
                            book={book}
                            handleAddBook={() => this.addBook(book)}
                        />
                    )}
                </div>
            </div>
        );
    }
}


export default Search;