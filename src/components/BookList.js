import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props;
    return (
      books.map((book) => <Book key={book.id} book={book} />)
    );
  }
}

export default BookList;
