import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Action = (props) => {
  const dispatch = useDispatch();
  const { id } = props;

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <ul className="action-list d-flex">
      <li>
        <button type="button">Comments</button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => { handleRemove(id); }}
        >
          Remove
        </button>
      </li>
      <li>
        <button type="button">Edit</button>
      </li>
    </ul>
  );
};

Action.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Action;
