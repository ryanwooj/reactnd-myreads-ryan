import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Books from './Books.js'

class ListBooks extends React.Component {

  render() {
    const { booksOnShelf, optionChange, rating, changeRating } = this.props
    const shelves = ["currentlyReading", "wantToRead", "read"]
    const status = ["Curently Reading", "Want To Read", "Read"]

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>Ryan's Reads</h1>
        </div>
        {console.log(rating)}
        <div className="list-books-content">
          {shelves.map((shelve, index) => (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{status[index]}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {booksOnShelf.filter(book => book.shelf === shelves[index])
                    .map(book => (
                      <li key={book.id}>
                        <Books
                          book = {book}
                          optionChange={optionChange}
                          currentShelf= {shelve}
                          changeRating={changeRating}
                          rating={rating}
                        />
                      </li>)
                    )
                  }
                </ol>
              </div>
            </div>
          ))}
        </div>
        <div className="open-search">
          <Link
          to ='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

ListBooks.propTypes = {
  booksOnShelf: PropTypes.array.isRequired,
  optionChange: PropTypes.func.isRequired
};

export default ListBooks
