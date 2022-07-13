import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = useSelector((state) => state.books);

  return (
    Object.keys(books).map((id) => <Book key={id} book={books[id]} id={id} />)
  );
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default BookList;
