import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { books } = this.props;
    return (
      books.map((book) => <Book key={book.id} book={book} />)
    );
  }
}

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BookList;
