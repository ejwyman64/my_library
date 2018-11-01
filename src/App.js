// import ReactBootstrap from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.js';
import './Styles/App.css';
import Header from './Header';
import User from './User';
import Library from './LibraryDocs/Library';

class App extends Component {

  state = {

    books: [
      {
        id: "101",
        title: "Sense and Sensibility",
        author: "Jane Austen",
        pageCount: 450,
        isLendable: false,
        isEditing: false
      },
      {
        id: "102",
        title: "1984",
        author: "George Orwell",
        pageCount: 320,
        isLendable: false,
        isEditing: false
      },
      {
        id: "103",
        title: "Enders Game",
        author: "Orson Scott Card",
        pageCount: 405,
        isLendable: false,
        isEditing: false
      }
    ]
  }


  toggleBookOptions = (property, indexToChange) =>
    this.setState({
      books: this.state.books.map((book, index) => {
        if (index === indexToChange) {
          return {
            ...book,
            [property]: !book[property]
          };
        }
        return book;
      })
    });

  toggleLendable = index =>
    this.toggleBookOptions("isLendable", index);

  toggleEditBook = index =>
    this.toggleBookOptions("isEditing", index);

  setTitleAt = (title, indexToChange) =>
    this.setState({
      books: this.state.books.map((book, index) => {
        if (index === indexToChange) {
          return {
            ...book,
            title
          };
        }
        return book;
      })
    });

  getTotalBooks = () => this.state.books.length;

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="content">
            <User />
            <Library books={this.state.books}
              toggleLendable={this.toggleLendable}
              toggleEditBook={this.toggleEditBook}
              setTitleAt={this.setTitleAt}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
