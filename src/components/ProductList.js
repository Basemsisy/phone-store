import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context'

export default class ProductList extends Component {
  componentDidMount() {
    document.title = 'phone store - products';
  }
  render() {
    // const {store} = this.props;
    return (
      <React.Fragment>
          <div className="container py-4">
            <Title name="our" title="products"/>
            <div className="row">
            <ProductConsumer>
              {value =>{
                return value.products.map(product => 
                  <Product key={product.id} product={product} detailProduct={value.detailProduct} handleDetail={value.handleDetail}/>
                  )
                }
              }
            </ProductConsumer>
            </div>

          </div>
      </React.Fragment>
    )
  }
}