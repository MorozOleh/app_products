import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './ProductsStyle';
import { getProducts } from '../../redux/selectors/selectors';
import { useRouteMatch, Link } from 'react-router-dom';
import { Loader } from '../Loader';
import { fetchProducts, findProducts } from '../../redux/actions/actionCreator';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { showModal } from '../../redux/actions/actionCreator'


export function Products() {
  const [name, setName] = useState('');
  const match = useRouteMatch('/product/:id?');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const classes = useStyles();
  const products = useSelector(getProducts);

  const handleQuery = (event) => {
    const lowerQuery = name.toLowerCase();

    setName(event.target.value);
    dispatch(findProducts(lowerQuery));
  };

   const handleEditButton = () => {
    dispatch(showModal())
   }
  
  if (!products.length) {
    return <Loader />
  }
  
  if (products.length) {
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
            <Card key={product.id}className={classes.card}>
          <CardMedia
            className={classes.media}
            image={product.imageUrl}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {product.name}
            </Typography>
            <Typography color="textSecondary" component="p">
              {`Description: ${product.description}`}
            </Typography>
            <Typography color="textSecondary" component="p">
              {`Quantity: ${product.count}`}
            </Typography>
            <Typography color="textSecondary" component="p">
              {`Color: ${product.color}`}
            </Typography>
            <Typography color="textSecondary" component="p">
              {`Size: ${product.size.width}mm x ${product.size.height}mm`}
            </Typography>
            <Typography color="textSecondary" component="p">
              {`Weight: ${product.weight} g`}
            </Typography>
            <div className={classes.btn}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={`${match.url}/${product.id}`}
                >
                  Comments
                </Button>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to={`${match.url}/${product.id}?_edit=product`}
                onClick={handleEditButton}
              >
                Edit card
              </Button>
            </div>
          </CardContent>
        </Card>
        ))}
        </div>
      </>
    )
  }
}

