import React from 'react';
import PropTypes from 'prop-types';
import Action from './Action';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { book, id } = this.props;
    const {
      title, author, category,
    } = book[0];
    return (
      <li className="book-card d-flex space-between m-1">
        <div>
          <ul>
            <li>{category}</li>
            <li><h2>{title}</h2></li>
            <li>{author}</li>
          </ul>
          <Action id={id} />
        </div>

        <div className="d-flex space-between book-card-item">
          <div className="d-flex">
            <span className="progress" />
            {20}
            %
            {' '}
            <br />
            {' '}
            Completed
          </div>
          <div>
            <h4>CURRENT CHAPTER</h4>
            <div>
              Chapter
              {1}
              :
              Unknown
            </div>
            <div>
              <button className="m-t-1" type="button">Update Progress</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

Book.defaultProps = {
  id: '',
  category: '',
  title: '',
  author: '',
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
