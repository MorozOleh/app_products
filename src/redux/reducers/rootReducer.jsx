import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { productsReducer } from './productsReducer';
import { productReducer } from './productReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  loading: loadingReducer,
  isModalOpen: modalReducer 
});
