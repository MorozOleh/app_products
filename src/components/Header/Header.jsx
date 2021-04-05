import React from 'react'
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/actionCreator';

import 'bulma';

export function Header() {
  const dispatch = useDispatch();
  
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
          onClick={() => dispatch(fetchProducts())}
        >
          Posts
        </Link>
      </div>
    </nav>
  );
};
