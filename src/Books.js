import React, { Component } from 'react';

class Books extends Component {


  render() {
    const { book, optionChange, currentShelf } = this.props;

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
        <p className="book-authors">Rating: {book.averageRating}</p>
      </div>
    );
  }
}

export default Books
