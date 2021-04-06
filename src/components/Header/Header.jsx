import React from 'react'
import { Link} from 'react-router-dom';
import 'bulma';

export function Header() {
  
  return (
    <nav className="navbar" style={{ background: '#01FF70'}}>
      <div className="navbar-brand" is-tab="true">
        <Link
          to="/"
          className="navbar-item"
        >
          Home
        </Link>
        <Link
          to="/product"
          className="navbar-item"
        >
          Posts
        </Link>
      </div>
    </nav>
  );
};
