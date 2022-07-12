const CREATE = 'bookstore-app/books/CREATE';
const REMOVE = 'bookstore-app/books/REMOVE';

const books = [
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
];

export const addBook = (book) => ({
  type: CREATE, book,
});

export const removeBook = (id) => ({
  type: REMOVE, id,
});

const booksReducer = (state = books, action = {}) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
