import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div className="book-card m-1 d-flex flex-column">
      <div>
        <button type="button" className="btn p-1" onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
      </div>
      <h2 className="text-primary fw-bold m-t-1">Book Categories</h2>
      <hr />
      <ul className="m-t-1">
        {
          categories.map((category) => (
            <li key={category.toString()}>{category}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Categories;
