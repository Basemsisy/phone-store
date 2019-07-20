import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Default extends Component {
  render() {
    return (
      <div style={{height: '89vh'}} className="col-10 mx-auto text-center d-flex align-items-center justify-content-center text-muted">
        <h1 className="text-title">
          <strong>"{this.props.match.params.error}" </strong>
           not found, back to <Link to="/">home page</Link>
         </h1>
      </div>
    )
  }
}
