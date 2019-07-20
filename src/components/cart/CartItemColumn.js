import React from 'react';

export default function CartItemColumn({children, customClasses}) {
  const className = "col-10 mx-auto col-lg-2 d-flex justify-content-center align-items-center ";
  return (
    
    <div className={customClasses ? (className + customClasses) : className}>
      {children}
    </div>
  )
}
