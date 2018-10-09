import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Books from './Books';
import * as BooksAPI from './BooksAPI';


class SearchBooks extends React.Component {

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({query: query})
    // console.log(query);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    BooksAPI.search(this.state.query).then((books) => {
      this.setState({books})
      // console.log(books);
    })
  }

  // optionChange = (event, book) => {
  //   event.preventDefault()
  //   BooksAPI.update(book, event.target.value)
  // }


  render() {

    const { booksOnShelf, optionChange } = this.props
    const { books, query } = this.state

    return (
      <div className="search-books">

        <div className="search-books-bar">
          <Link className="close-search" to="/">Back</Link>
          <div className="search-books-input-wrapper">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}/>
            </form>
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(foundBook => {
              let shelf = "none"
              booksOnShelf.map(book => (
                book.id === foundBook.id ? shelf = book.shelf : ''
              ))
              return (
                <li key={foundBook.id}>
                  <Books
                    book = {foundBook}
                    optionChange={optionChange}
                    currentShelf= {shelf}
                  />
                </li>
              )})}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  booksOnShelf: PropTypes.array.isRequired,
  optionChange: PropTypes.func.isRequired
}

export default SearchBooks
