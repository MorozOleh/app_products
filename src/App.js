import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Product } from './components/Product';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Switch>
        <Route path='/' exact component={() => (
          <h1 className="App__title">Place for your product</h1>
        )} />
        <Route path="/product" exact component={Products} />
        <Route path="/product/:id?" component={Product} />
      </Switch>
    </div>
  );
}
