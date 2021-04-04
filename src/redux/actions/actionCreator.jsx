import {
  FETCH_PRODUCTS,
  GET_PRODUCT,
  SHOW_LOADING,
  HIDE_LOADING,
  HIDE_MODAL,
  SHOW_MODAL,
  FIND_PRODUCTS
} from '../types';
import { putComment, requestProducts } from '../../API/api';

export const fetchProducts = () => {
  return async dispatch => {
    dispatch({ type: SHOW_LOADING });
    const response = await requestProducts();

    dispatch({
      type: FETCH_PRODUCTS,
      payload: response
    });
    dispatch({ type: HIDE_LOADING });
  }
};

export const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id
});

export const hideModal = () => ({
  type: HIDE_MODAL
});

export const showModal = () => ({
  type: SHOW_MODAL
});

export const updateComment = (data) => {
  const { id } = data;
  return async dispatch => {
    dispatch({ type: SHOW_LOADING });

    await putComment(id, data);

    const response = await requestProducts();

    dispatch({
      type: FETCH_PRODUCTS,
      payload: response
    });

    dispatch({
      type: GET_PRODUCT,
      payload: id
    });

    dispatch({ type: HIDE_LOADING });

  }
}

export const findProducts = (query) => ({
  type: FIND_PRODUCTS,
  payload: query
});