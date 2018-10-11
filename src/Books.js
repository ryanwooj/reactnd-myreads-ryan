import React, { Component } from 'react';

class Books extends Component {


  render() {
    const { book, optionChange, currentShelf, rating, changeRating } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 120,
              height: 180,
              backgroundImage:`url("${book.imageLinks.smallThumbnail}")`
            }}/>
          <div className="book-shelf-changer">
            <select
              onChange= {(event) => optionChange(book, event.target.value)}
              value={currentShelf}>
              <option value="move" disabled> Move to...</option>
              <option value="currentlyReading">Curently Reading</option>
              <option value="wantToRead">Want To Read</option>
              <option value="read">Read</option>
              <option value="none">none</option>
            </select>
          </div>
        </div>
        <p className="book-title">{book.title}</p>
        <p className="book-authors">{book.authors}</p>
        {/* {console.log(book.id, rating.bookId)} */}
        {rating.filter(r => r.bookId === book.id)
          .map((rate, index) => (
            <p className="book-authors" key={index}>Rating: {rate.rate}</p>
          ))
        }
        <select onChange={(event) => changeRating(book, event.target.value)} value={book.id === rating.bookId && rating.rate}>
          <option value="Select"> Select ...</option>
          <option value="4.0">4.0</option>
          <option value="4.5">4.5</option>
          <option value="5.0">5.0</option>
          <option value="3.5">3.5</option>
        </select>

      </div>
    );
  }
}

export default Books
