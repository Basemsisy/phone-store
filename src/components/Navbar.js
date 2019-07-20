import React, { Component } from 'react';
import {CustomButton} from './Button';
import logo from '../logo.svg';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="40" height="40" alt="site logo"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-3">
            <Link to="/" className="nav-link">products</Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
        <CustomButton><i className="fas fa-cart-plus"></i> my cart</CustomButton>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background-color: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite)!important;
    font-size: 1.2rem;
    text-transform: capitalize
  }
`