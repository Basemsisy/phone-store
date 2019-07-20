import React from 'react';

export default function Title({name, title}) {
  return (
    <div className="clo-10 mx-auto my-4 text-center text-title">
        <h1 className="text-capitalize">
          {name + " "}
          <strong className="text-blue">{title}</strong>
        </h1>
    </div>
  )
}
