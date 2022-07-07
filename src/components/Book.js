import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { book } = this.props;
    const {
      title, author, progress, currentChapter, cat,
    } = book;
    const { chapter, chapterTitle } = currentChapter;
    return (
      <li className="book-card d-flex space-between m-1">
        <div>
          <ul>
            <li>{cat}</li>
            <li><h2>{title}</h2></li>
            <li>{author}</li>
          </ul>
        </div>

        <div className="d-flex space-between book-card-item">
          <div>
            {progress}
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
              {chapter}
              :
              {chapterTitle}
            </div>
            <div>
              <button type="button">Update Progress</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  cat: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  currentChapter: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
  chapterTitle: PropTypes.string.isRequired,
};

export default Book;
