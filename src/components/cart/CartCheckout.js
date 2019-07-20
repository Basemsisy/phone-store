import React from 'react';
import {CustomButton} from '../Button';

export default function CartCheckout({value}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 ml-auto">
            <CustomButton removeButton onClick={() => value.clearCart()}>clear cart</CustomButton>
            <h5 className="mt-3">
              <span className="text-title">sub total: </span>
              {value.cartSubTotal}
            </h5>
            <h5>
              <span className="text-title">tax: </span>
              {value.cartTax}
            </h5>
            <h5>
              <span className="text-title">toal: </span>
              {value.cartTotal}
            </h5>
        </div>
      </div>
    </div>
  )
}
