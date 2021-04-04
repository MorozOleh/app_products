import React from 'react';
import { useStyles } from './ProductStyle';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../redux/actions/actionCreator'
import { Modal } from '../Modal';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export function Product({
  id,
  image,
  name,
  count,
  weight,
  size,
  color,
}) {
  const classes = useStyles();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {name}
          </Typography>
          <Typography color="textSecondary" component="p">
            {`Quantity: ${count}`}
          </Typography>
          <Typography color="textSecondary" component="p">
            {`Color: ${color}`}
          </Typography>
          <Typography color="textSecondary" component="p">
            {`Size: ${size.width}mm x ${size.height}mm`}
          </Typography>
          <Typography color="textSecondary" component="p">
            {`Weight: ${weight} g`}
          </Typography>
          <div className={classes.btn}>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={`${match.url}/${id}`}
              onClick={() => dispatch(getProduct(id))}
            >
              Comments
            </Button>
          </div>
        </CardContent>
      </Card>
      <Modal />
    </>
  );
}
