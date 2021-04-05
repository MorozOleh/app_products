import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Form } from '../Form';
import { useStyles } from './ModalStyle';

export function Modal() {
  const classes = useStyles();
  const open = useSelector(state => state.isModalOpen.isOpenModal);
  const location = useLocation();

  return (
    <Backdrop
      className={classes.backdrop}
      open={open}
    >
      {location.search && <Form />}
    </Backdrop>
  );
};
