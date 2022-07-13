const CREATE = 'bookstore-app/books/CREATE';
const REMOVE = 'bookstore-app/books/REMOVE';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3b1tXzUbfNb2rUnAzloB/books';

export const addBook = (book) => ({
  type: CREATE, book,
});

export const removeBook = (id) => ({
  type: REMOVE, id,
});

export const fetchBooks = () => (dispatch) => {
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => dispatch(addBook(data)));
};

export const createBook = (book) => async (dispatch) => {
  await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  }).then(() => dispatch(fetchBooks()));
};

const booksReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case CREATE:
      return action.book;
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
