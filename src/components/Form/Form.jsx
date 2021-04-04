import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useStyles } from './FormStyle';
import { getProducts } from '../../redux/selectors/selectors'
import { updateComment, hideModal } from '../../redux/actions/actionCreator';
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function Form() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const location = useLocation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const searchParams = new URLSearchParams(location.search);
  const isOpenComment = searchParams.get('_edit');
  const product = useSelector(getProducts)[0];


  const onInputsChanged = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      
      case 'body':
        setBody(value)
        break;
      
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (body) {
      const addedComment = {
      ...product,
      comments: [
        ...product.comments,
        {
          id: nanoid(),
          productId: product.id,
          description: body,
          data: new Date().toDateString()
        }
      ]
    };

      dispatch(updateComment(addedComment));
      dispatch(hideModal());
      toast.success('You have successfully added your comment');

      return;
    }
  }

  return (
    <form
      className={classes.root}
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {!isOpenComment &&
        <div>
          <TextField
            label="Type your title"
            id="filled-size-normal"
            value={title}
            name="title"
            variant="filled"
            onChange={onInputsChanged}
          />
        </div>
      }

      <div>
        <TextField
          label={!isOpenComment
            ? "Type your description"
            : "Type your comment"
          }
          id="filled-size-normal"
          value={body}
          name="body"
          variant="filled"
          onChange={onInputsChanged}
        />
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
};