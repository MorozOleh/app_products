import React from 'react'
import { useStyles } from './CommentStyle';
import { useDispatch, useSelector} from 'react-redux';
import { showModal } from '../../redux/actions/actionCreator'
import { Link } from 'react-router-dom';
import { getProducts } from '../../redux/selectors/selectors'
import { updateComment } from '../../redux/actions/actionCreator';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export function Comment({match, comments, id}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector(getProducts)[0];

  const handleDelete = (id) => {
    const deleteComment = {
      ...product,
      comments: product.comments.filter(
        comment => comment.id !== id
      )
    };

    dispatch(updateComment(deleteComment));
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
          to={`${match.url}/${id}?_edit=comment`}
          onClick={() => dispatch(showModal())}
         >
            Add comments
        </Button>
      </div>
    </>
  )
}
