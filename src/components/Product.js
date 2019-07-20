import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
import {CustomButton} from './Button';
import {ProductConsumer} from '../context'

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-10 mx-auto col-md-6 col-lg-3">
        <ProductConsumer>
          {value => {
            return (
                <figure className="card">
                <div className="img-wrap">
                  <LazyLoad       
                    debounce={false}
                    throttle={50}
                  >
                    <img src={img} className="img-fluid" alt={title + ' img'} />
                  </LazyLoad>
                </div>
                <div className="info-wrap">
                  <div className="title-wrap">
                    <Link to="/details" onClick={() => {this.props.handleDetail(id)}}>
                      <p>{title}</p>
                    </Link>
                  </div>
                    <span>${price}</span>
                  <CustomButton 
                    disabled={inCart ? true : false} 
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id)
                    }}
                  >
                    { inCart ? 'in cart' : <i className="fas fa-cart-plus"></i>}
                  </CustomButton>
                </div>
              </figure>
              )
            }
          }
        </ProductConsumer>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
  position: relative;

  &:hover .card {
    transform: translateY(-3px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    transition: .5s ease-in-out
  }

  &:hover img {
    transform: scale(1)
  }

  .card {box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2)}

  .img-wrap {
    border-bottom: 1px solid rgba(0,0,0,.125);
    padding: .7rem;
  }

  img {
    transform: scale(.8);
    transition: .5s ease-in-out
  }

  .info-wrap {padding: .7rem}

  button {float: right}
`
