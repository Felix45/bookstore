import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;

  return (
    Object.keys(books).map((id) => <Book key={id} book={books[id]} id={id} />)
  );
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default BookList;
