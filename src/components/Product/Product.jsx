import React, { useEffect } from 'react';
import { useStyles } from './ProductStyle';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../Modal';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { fetchProduct, showModal } from '../../redux/actions/actionCreator';
import { Loader } from '../Loader';
import { Comment } from '../Comment';

export function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams()
  const match = useRouteMatch();
  const product = useSelector(state => state.product.fetchedProduct);
  const isLoading = useSelector(state => state.loading.isLoading);

  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [])

  const handleEditButton = () => {
    dispatch(showModal())
   }

  if (!product || isLoading) {
    return <Loader />
  }
  
  if (product) {
    return (
      <>
        <Card className={classes.root}>
          <CardMedia
          className={classes.media}
          image={product.imageUrl}
          title={product.name}
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
                to={`${match.url}?_edit=product`}
              onClick={handleEditButton}
              >
                Edit card
            </Button>
            </div>
          </CardContent>
        </Card>
        <Modal />
        <Comment
            comments={product.comments}
            match={id}
            id={product.id}
          />
      </>
    );
  };
};
