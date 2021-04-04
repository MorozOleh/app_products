import React from 'react';
import { Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.scss';

export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Route path="/product" component={Products} />
    </div>
  );
}
