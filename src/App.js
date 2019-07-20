import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/:error" component={Default}/>
      </Switch>
      <Modal/>
    </div>
  );
}

export default App;
