import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/books';

const booksContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = useSelector((state) => state.books);

  return (
    <div>
      <BookList books={books} />
      <AddBook />
    </div>
  );
};

export default booksContainer;
