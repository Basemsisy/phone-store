import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCard from './EmptyCard';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartCheckout from './CartCheckout'

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const {cart} = value;
            if(cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart"/>
                  <CartColumns/>
                  <CartList value={value}/>
                  <CartCheckout value={value}/>
                </React.Fragment>
              )
            } else {
              return <EmptyCard/>
            }
          } 
          }
        </ProductConsumer>
      </section>
    )
  }
}
