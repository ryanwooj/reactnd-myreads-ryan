import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css'

class BooksApp extends Component {

  state = {
    books : [],
    rating: [{
      bookId: '',
      rate: 0
    }]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      // console.log(books);
    })
  }

  optionChange = (book, shelf) => {
      BooksAPI.update(book,shelf).then(() => {
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
        })
      })
  }

  changeRating = (book, rating) => {
    let newRate = {
      bookId: book.id,
      rate: rating
    }
    this.setState({ rating: this.state.rating.concat(newRate)})
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <ListBooks
              optionChange={this.optionChange}
              booksOnShelf={this.state.books}
              rating={this.state.rating}
              changeRating={this.changeRating}
            />
          )}
        />

        <Route
          path="/search"
          render={({history}) => (
            <SearchBooks
              optionChange={this.optionChange}
              booksOnShelf={this.state.books}
            />
          )}
        />

      </div>
    )
  }
}

export default BooksApp
