import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { productsReducer } from './productsReducer'
import { modalReducer } from './modalReducer'

export const rootReducer = combineReducers({
  products: productsReducer,
  loading: loadingReducer,
  isModalOpen: modalReducer 
});