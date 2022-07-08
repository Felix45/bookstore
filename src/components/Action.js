import React from 'react';

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="action-list d-flex">
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
      </ul>
    );
  }
}

export default Action;
