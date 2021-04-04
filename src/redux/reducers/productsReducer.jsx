import { FETCH_PRODUCTS, GET_PRODUCT, FIND_PRODUCTS } from '../types';

const initialState = {
  fetchedProducts: [],
  cachesProducts: []
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        fetchedProducts: action.payload,
        cachesProducts: action.payload
      }
    
    case GET_PRODUCT:
      return {
        ...state,
        cachesProducts: state.fetchedProducts.filter(
          product => product.id === action.payload
        )
      }
    
    case FIND_PRODUCTS:
      return {
        ...state,
        cachesProducts: state.fetchedProducts.filter(
          product => product.name.toLowerCase().includes(action.payload)
        )
      }
    
    default:
      return state;
  }
}