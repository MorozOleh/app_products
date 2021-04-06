import { FETCH_PRODUCT } from '../types';

const initialState = {
  fetchedProduct: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        fetchedProduct: action.payload,
      }

    default:
      return state;
  }
};
