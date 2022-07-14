import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const links = [
      { id: 1, text: 'Books', url: '/books' },
      { id: 2, text: 'Categories', url: '/categories' },
    ];

    return (
      <nav className="d-flex space-between p-y align-center">
        <div className="d-flex">
          <h1 className="text-primary fw-bold">Bookstore CMS</h1>
          <ul className="d-flex align-center">
            {
                links.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.url}>{link.text}</NavLink>
                  </li>
                ))
            }
          </ul>
        </div>
        <div className="d-flex align-center user-profile">
          <span className="fa fa-user" />
        </div>
      </nav>
    );
  }
}

export default NavBar;
