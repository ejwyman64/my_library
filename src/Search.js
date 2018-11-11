import React, { Component } from 'react';
import axios from 'axios';
import SearchedBook from './SearchedBook';


class Search extends Component {

    state = {
        searchQuery: []
    }

    submitHandlerSearch = (e) => {
        e.preventDefault();
        const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${e.target.elements.searchInput.value}`;
        axios.get(searchUrl).then(response => {
            this.setState({
                searchQuery: response.data.items.filter(book => 
                    book.id &&
                    book.volumeInfo.categories &&
                    book.volumeInfo.categories[0] &&
                    book.volumeInfo.imageLinks.smallThumbnail &&
                    book.volumeInfo.authors



                    // can make this a long && string to make sure it includes all of the props I want.
                    ).map(book => {
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
            console.log('Error fetching and parsing data.', error)
        });
    }

    addBook = book => {
        axios.post(`https://my-library-220222.firebaseio.com/books.json`, book);
        alert("Yay! Your book has been added to your library!");
    }

    render() {
        return (
            <div className="search">
                <h1>This will be a search page!</h1>
                <h2>Search Guides</h2>
                <ul>
                    <li><span>intitle:</span> Returns results where the text following this keyword is found in the title.</li>
                    <li><span>inauthor:</span> Returns results where the text following this keyword is found in the author.</li>
                    <li><span>inpublisher:</span> Returns results where the text following this keyword is found in the publisher.</li>
                    <li><span>subject:</span> Returns results where the text following this keyword is listed in the category list of the volume.</li>
                    <li><span>isbn:</span> Returns results where the text following this keyword is the ISBN number.</li>
                    <li><span>lccn:</span> Returns results where the text following this keyword is the Library of Congress Control Number.</li>
                    <li><span>oclc:</span> Returns results where the text following this keyword is the Online Computer Library Center number.</li>
                </ul>
                <form onSubmit={this.submitHandlerSearch}>
                    <input required
                        type="text"
                        name="searchInput"
                        placeholder="title, author, publisher, isbn, etc." />
                    <button type="submit" name="submit" value="submit">Search for Book</button>
                </form>
                <div>
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