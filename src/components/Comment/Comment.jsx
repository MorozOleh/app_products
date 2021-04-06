import React from 'react';
import { useStyles } from './CommentStyle';
import { useDispatch, useSelector} from 'react-redux';
import { showModal } from '../../redux/actions/actionCreator';
import { Link } from 'react-router-dom';
import { getProduct } from '../../redux/selectors/selectors';
import { updateProduct } from '../../redux/actions/actionCreator';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export function Comment({match, comments}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector(getProduct);

  const handleDelete = (id) => {
    const deleteComment = {
      ...product,
      comments: product.comments.filter(
        comment => comment.id !== id
      )
    };

    dispatch(updateProduct(deleteComment));
  }

  return (
    <>
        <div className={classes.comments}>
        <Card >
          {comments.map(comment => (
            <CardContent key={comment.id}>
              <div className={classes.wrapper}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="p"
                >
                  {comment.description}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(comment.id)}
                >
                  DELETE
                </Button>
              </div>
            </CardContent>
          ))}
        </Card>
      </div>
      <div className={classes.btn}>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to={`${match}?_edit=comment`}
          onClick={() => dispatch(showModal())}
        >
          Add comments
        </Button>
      </div>
    </>
  );
};
