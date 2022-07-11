import { combineReducers, configureStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoriesReducer,
});

const store = configureStore(rootReducer);

export default store;
