import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { useStyles } from "./FormStyle";
import { getProduct } from "../../redux/selectors/selectors"
import { updateProduct, hideModal } from "../../redux/actions/actionCreator";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export function Form() {
  const product = useSelector(getProduct);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [color, setColor] = useState(product.color);
  const [count, setCount] = useState(product.count);
  const [weight, setWeight] = useState(product.weight);
  const [height, setHeight] = useState(product.size.height);
  const [width, setWidth] = useState(product.size.width);
  const [comment, setComment] = useState("");

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const searchParams = new URLSearchParams(location.search);
  const editAction = searchParams.get("_edit");

  const onInputsChanged = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      
      case "description":
        setDescription(value)
        break;
      
      case "color":
        setColor(value);
        break;
      
      case "count":
        setCount(value);
        break;
      
      case "weight":
        setWeight(value);
        break;
      
      case "width":
        setWidth(value);
        break;
      
      case "height":
        setHeight(value);
        break;
      
      case "comment":
        setComment(value);
        break;
      
      default:
        return;
    }
  };

  const handleUndoButton = () => {
    dispatch(hideModal());
    history.push(match.url);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editAction === "product") {
      const changedProduct = {
        ...product,
        name,
        description,
        count,
        size: {
          width,
          height
        },
        weight
      }

      dispatch(updateProduct(changedProduct));
      dispatch(hideModal());
      toast.success("You have successfully updated product");

      return;
    }

    if (comment) {
      const addedComment = {
      ...product,
      comments: [
        ...product.comments,
        {
          id: nanoid(),
          productId: product.id,
          description: comment,
          data: new Date().toDateString()
        }
      ]
    };

      dispatch(updateProduct(addedComment));
      dispatch(hideModal());
      setComment('');
      toast.success("You have successfully added your comment");

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
      {editAction === "product" &&
        <>
          <div>
            <TextField
              label="Type your name"
              id="filled-size-normal"
              value={name}
              name="name"
              variant="filled"
              onChange={onInputsChanged}
            />
          </div>
          <div>
            <TextField
              label="Type description"
              id="filled-size-normal"
              value={description}
              name="description"
              variant="filled"
              onChange={onInputsChanged}
            />
          </div>
          <div>
            <TextField
              label="Type color"
              id="filled-size-normal"
              value={color}
              name="color"
              variant="filled"
              onChange={onInputsChanged}
            />
          </div>
          <div>
            <TextField
              label="Type your quantity of product"
              id="filled-size-normal"
              value={count}
              name="count"
              type="number"
              variant="filled"
              onChange={onInputsChanged}
            />
          </div>
          <div>
            <TextField
              label="Type weight"
              id="filled-size-normal"
              value={weight}
              name="weight"
              type="number"
              variant="filled"
              onChange={onInputsChanged}
            />
          </div>
          <div>
            <TextField
              label="Type width"
              id="filled-size-normal"
              value={width}
              name="width"
              type="number"
              variant="filled"
              onChange={onInputsChanged}
            />
          </div>
          <div>
            <TextField
              label="Type your height"
              id="filled-size-normal"
              value={height}
              name="height"
              type="number"
              variant="filled"
              onChange={onInputsChanged}
            />
          </div>
        </>
      }

      {editAction === "comment" &&
        <div>
        <TextField
          label="Type your comment"
          id="filled-size-normal"
          value={comment}
          name="comment"
          variant="filled"
          onChange={onInputsChanged}
        />
      </div>}
      <div className={classes.btn}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Save
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          type="button"
          onClick={handleUndoButton}
        >
          UNDO
        </Button>
      </div>
    </form>
  );
};
