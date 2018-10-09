import React, { Component } from 'react';

class Books extends Component {
  render() {
    const { book } = this.props;

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
              onChange= {(event) => this.props.optionChange(this.props.book, event.target.value)}
              value={this.props.currentShelf}>
              <option value="move" disabled> Move to...</option>
              <option value="wantToRead">Want To Read</option>
              <option value="currentlyReading">Curently Reading</option>
              <option value="read">Read</option>
              <option value="none">none</option>
            </select>
          </div>
        </div>
        <p className="book-title">{this.props.book.title}</p>
        <p className="book-authors">{this.props.book.authors}</p>
      </div>
    );
  }
}

export default Books
