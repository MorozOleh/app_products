import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './ProductsStyle';
import { Product } from '../Product';
import { getProducts } from '../../redux/selectors/selectors';
import { useRouteMatch } from 'react-router-dom';
import { Loader } from '../Loader';
import { findProducts } from '../../redux/actions/actionCreator';
import { Comment } from '../Comment';

export function Products() {
  const [name, setName] = useState('');
  const match = useRouteMatch('/product/:id?');

  const classes = useStyles();
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const isLoading = useSelector(
    state => state.loading.isLoading
  );

  const handleQuery = (event) => {
    const lowerQuery = name.toLowerCase();

    setName(event.target.value);
    dispatch(findProducts(lowerQuery));
  };

  if (isLoading) {
    return <Loader />
  };

  return (
    <>
      {!match.params.id && <input
        className="input is-primary"
        type="text"
        value={name}
        onChange={handleQuery}
        placeholder="Find product by name"
      />}
    <div className={classes.root}>
      {products.map(product => (
        <Product
          key={product.id}
          image={product.imageUrl}
          name={product.name}
          count={product.count}
          weight={product.weight}
          comments={product.comments}
          size={product.size}
          color={product.color}
          id={product.id}
          isParam={match.params.id}
          description={product.description}
        />
      ))}
      </div>
      {
        match.params.id &&
        <Comment
          comments={products[0].comments}
          match={match.params.id}
          id={products[0].id}
        />
      }
    </>
  )
}
