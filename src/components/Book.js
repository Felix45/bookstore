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
    const currentChapter = title.split(' ').pop();
    const progress = Math.floor(Math.random() * 101);
    const chapter = Math.floor(Math.random() * 21);
    return (
      <li className="book-card d-flex space-between m-1">
        <div>
          <ul>
            <li className="text-dull"><strong>{category}</strong></li>
            <li className="m-t-1"><h2>{title}</h2></li>
            <li className="text-primary">{author}</li>
          </ul>
          <Action id={id} />
        </div>

        <div className="d-flex space-between book-card-item">
          <div className="d-flex font-large">
            <span className="progress" />
            <div className="d-flex flex-column">
              <span>
                {progress}
                %
              </span>
              <span className="text-dull">Completed</span>
            </div>
          </div>
          <div className="border" />
          <div>
            <h4 className="text-dull">CURRENT CHAPTER</h4>
            <div className="m-t-1">
              Chapter
              {' '}
              {chapter}
              :
              {`  ${currentChapter.charAt(0).toUpperCase()}${currentChapter.slice(1)}`}
            </div>
            <div>
              <button className="p-1 btn m-t-1" type="button">Update Progress</button>
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
