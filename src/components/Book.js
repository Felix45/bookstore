import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { book } = this.props;
    const {
      id, title, author, progress, currentChapter,
    } = book;
    const { chapter, chapterTitle } = currentChapter;
    return (
      <li className="book-card">
        <div>
          <ul>
            <li>{title}</li>
            <li>{author}</li>
          </ul>
        </div>

        <div>
          <div>{progress}</div>
          <div>
            <h4>CURRENT CHAPTER</h4>
            <div>
              {chapter}
              {' '}
              :
              {' '}
              {chapterTitle}
            </div>
            <div>
              <button>Update Progress</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
