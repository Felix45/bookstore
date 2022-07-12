import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleBook = (event) => {
    event.preventDefault();

    if (title !== '' && author !== '') {
      dispatch(addBook({
        id: uuidv4(),
        cat: 'Computer Science',
        title,
        author,
        comments: [],
        progress: 0,
        chapters: 20,
        currentChapter: {},
      }));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="m-1">
      <h2 className="title">Add new book</h2>
      <form className="book-card d-flex container-fluid">
        <input className="p-1" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Book title" />
        <input className="p-1" type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter Book author" />
        <input className="p-1 btn" type="submit" value="Add Book" onClick={handleBook} />
      </form>
    </div>
  );
};

export default AddBook;
