import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import NavBar from './components/NavBar';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<BooksContainer />} />
          <Route path="/books" element={<BooksContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
