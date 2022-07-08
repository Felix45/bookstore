import React from 'react';
import BookList from './BookList';
import AddBook from './AddBook';

class BooksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          cat: 'Action',
          title: 'The Hunger Games',
          author: 'Suzzane Collins',
          comments: [],
          progress: 64,
          chapters: 20,
          currentChapter: { chapter: 17, chapterTitle: 'Hunger is no game' },
        },
        {
          id: 2,
          cat: 'Science Fiction',
          title: 'Dune',
          author: 'Frank Herbert',
          comments: [],
          progress: 80,
          chapters: 20,
          currentChapter: { chapter: 3, chapterTitle: 'A lesson learned' },
        },
        {
          id: 3,
          cat: 'Economy',
          title: 'Capital in the 21st Century',
          author: 'Suzzane Collins',
          comments: [],
          progress: 40,
          chapters: 20,
          currentChapter: { chapter: 1, chapterTitle: 'Introduction' },
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <BookList books={books} />
        <AddBook />
      </div>
    );
  }
}

export default BooksContainer;
