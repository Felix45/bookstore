import React from 'react';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="m-1">
        <h2 className="title">Add new book</h2>
        <form className="book-card d-flex container-fluid">
          <input className="p-1" type="text" name="title" placeholder="Enter Book title" />
          <input className="p-1" type="text" name="author" placeholder="Enter Book author" />
          <input className="p-1 btn" type="submit" value="Add Book" />
        </form>
      </div>
    );
  }
}

export default AddBook;
