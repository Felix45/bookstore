import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleBook = (event) => {
    event.preventDefault();

    if (title !== '' && author !== '') {
      dispatch(createBook({
        item_id: uuidv4(),
        category: 'Computer Science',
        title,
        author,
      }));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="m-1">
      <h2 className="title"><strong>Add new book</strong></h2>
      <form className="book-card book-card-form d-flex space-evenly container-fluid">
        <input className="p-1" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Book title" />
        <input className="p-1" type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter Book author" />
        <input className="p-1 btn" type="submit" value="Add Book" onClick={handleBook} />
      </form>
    </div>
  );
};

export default AddBook;
