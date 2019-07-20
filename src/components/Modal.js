import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {CustomButton} from './Button';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {modalOpen, closeModal} = value;
          const {img, title, price} = value.modalProduct
          if(!modalOpen) {
            return null
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center">
                     <h5>item added to the cart</h5>
                     <img className="img-fluid" src={img} alt={title}/>
                     <h5 className="text-title">{title}</h5>
                     <h5 className="text-muted">price: ${price}</h5>
                     <Link to="/">
                      <CustomButton onClick={() => closeModal()}>continue shopping</CustomButton>
                     </Link>
                     <Link to="/cart">
                      <CustomButton cartButton onClick={() => closeModal()}>go to cart</CustomButton>
                     </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
    background-color: var(--mainWhite);
    padding: 30px 10px;
    border-radius: 10px
  }
`
