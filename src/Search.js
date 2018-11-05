import React, { Component } from 'react';
import axios from 'axios';

const url = `https://www.googleapis.com/books/v1/volumes?q=ender%27s%20game`;


class Search extends Component {

    state = {
        searchQuery: []
    }

    componentDidMount() {
        axios.get(url).then(response => {
            this.setState({
                searchQuery: response.data.items
            });
        }).catch(error => {
            console.log('Error fetching and parsing data.', error)
        });
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
                <form>
                    <input required
                        type="text"
                        name="searchQuery"
                        placeholder="title, author, publisher, isbn, etc." />
                    <button type="submit" name="submit" value="submit">Search for Book</button>
                </form>
            </div>
        );
    }
}


export default Search;