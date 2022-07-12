const CREATE = 'bookstore-app/books/CREATE';
const REMOVE = 'bookstore-app/books/REMOVE';

const books = [];

export const addBook = (book) => ({
  type: CREATE, book,
});

export const removeBook = (id) => ({
  type: REMOVE, id,
});

const booksReducer = (state = books, action = {}) => {
  switch (action.type) {
    case CREATE:
      return [...books, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
