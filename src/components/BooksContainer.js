import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import AddBook from './AddBook';

const booksContainer = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <BookList books={books} />
      <AddBook />
    </div>
  );
};

export default booksContainer;
