import React, { Component } from 'react';
import {CustomButton} from './Button';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Details extends Component {
  componentDidMount() {
    document.title = 'phone store - product details';
  }

  render() {
    return (
      <ProductConsumer>
        {value =>{
          const {id, title, img, price, company, info, inCart} = value.detailProduct;
          return (
            <div className="container py-4">
            <div className="row">
              <div className="clo-10 mx-auto my-4 text-center text-blue">
                <h2>{title}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt={title + ' img'}/>
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>model: {title}</h2>
                <h4 className="text-title text-muted text-uppercase mt-3 mb-2">
                  made by: <span>{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price: ${price}
                  </strong>
                </h4>
                <p className="text-cabitalize mt-3 mb-0 font-weight-bold">some info about product:</p>
                <p className="lead text-muted">{info}</p>
                <div className="buttons">
                  <Link to="/">
                  <CustomButton>back to products list</CustomButton>
                  </Link>
                  
                  <CustomButton 
                    disabled={inCart ? true : false} 
                    cartButton
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id)
                    }}
                  >
                    {inCart ? 'in cart' : (<span><i className="fas fa-cart-plus"></i> add to cart</span>)}
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
          )
        }
        }
      </ProductConsumer>
    )
  }
}