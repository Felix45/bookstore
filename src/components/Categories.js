import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div className="book-card m-1 d-flex flex-column">
      <div>
        <button type="button" className="btn p-1" onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
      </div>
      <div className="m-t-1">{category}</div>
    </div>
  );
};

export default Categories;
