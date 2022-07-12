import { combineReducers, createStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
