import React from 'react';
import CartItemColumn from './CartItemColumn';

export default function CartItem({item, value}) {
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;
  return (
    <div className="row my-4 text-capitalize text-center">
      <CartItemColumn >
        <img src={img} style={{width: '6rem'}} alt={title + ' img'} className="img-fluid" />
      </CartItemColumn>

      <CartItemColumn>
       {title}
      </CartItemColumn>

      <CartItemColumn>
        $ {price}
      </CartItemColumn>

      <CartItemColumn customClasses="my-2 my-lg-0">
          <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
            -
          </span>
          <span className="btn btn-black mx-1">
            {count}
          </span>
          <span className="btn btn-black mx-1" onClick={() => increment(id)}>
            +
          </span>
      </CartItemColumn>

      <CartItemColumn className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
          <i className="fas fa-trash" onClick={() => removeItem(id)}></i>
        </div>
      </CartItemColumn>

      <CartItemColumn className="col-10 mx-auto col-lg-2">
        <strong>item total: </strong> $ {total}
      </CartItemColumn>
    </div>
  )
}
