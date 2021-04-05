import { SHOW_MODAL, HIDE_MODAL } from '../types';

const initialState = {
  isOpenModal: false
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpenModal: true
      }
      
    case HIDE_MODAL:
      return {
        ...state,
        isOpenModal: false
      }
  
    default:
      return state;
  }
};
