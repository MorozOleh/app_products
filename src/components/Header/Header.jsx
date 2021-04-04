import React from 'react'
import { Link} from 'react-router-dom';
import 'bulma';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/actionCreator';

export function Header() {
  const dispatch = useDispatch();
  
  return (
    <nav className="navbar" style={{background: 'red'}}>
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

  )
}
