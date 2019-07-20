import React, { Component } from 'react';
import {storeProducts, detailProduct} from '../src/data';

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalProduct: {},
    modalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  componentWillMount() {
    this.setProducts();
  }

  //set products function
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(product => {
      const singleProduct = {...product};
      tempProducts = [...tempProducts, singleProduct];
    });
    this.setState(
      () => {
        return {products: tempProducts, detailProduct: tempProducts[0]}
      }
    );
  }

  //get item function
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product
  };

  //handle the item is showen in details page
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(
      () => {
        return {detailProduct: product}
      }
    )
  }

  //this function add the item into cart when the user click 
  addToCart = (id) => {
    const allProducts = [...this.state.products];
    const index = allProducts.findIndex(item => item.id === id);
    var product = allProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {products: allProducts, cart: [...this.state.cart, product]}
      },
      () => this.addTotals()
    );
  }
  
  //this function open the modal
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(
      () => {
        return {modalProduct: product, modalOpen: true}
      }
    );
  }
  
  //this fuction close the modal
  closeModal = () => {
    this.setState(
      () => {
        return {modalOpen: false}
      }
    );
  }

  //this function start whe the user click on the + button
  increment = (id) => {
    let tempCart = [...this.state.cart];
    let SelectedProduct = tempCart.find(item => item.id === id);
    let index = tempCart.indexOf(SelectedProduct);
    let product = tempCart[index];
    product.count+=1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {cart: tempCart}
      },
      () => this.addTotals()
    )
  }

  //this function start whe the user click on the - button
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.find(item => item.id === id);
    let index = tempCart.indexOf(selectedProduct);
    let product = tempCart[index];
    product.count -= 1;
    product.total =  product.count * product.price;
    if(product.count === 0) {
      this.removeItem(id)
    } else {
      this.setState(
        () => {
          return {cart: tempCart}
        }, 
        () => this.addTotals()
      )
    }
  }

  //this function start when the user click on the remove icon
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    let index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    
    this.setState(
      () => {
        return {cart: tempCart, products: tempProducts}
      },
      () => this.addTotals()
    );
  }

  //this funcion remove all products from cart
  clearCart = () => {
    this.setState(() => {
      return {cart: []}
    },
    () => {
      this.setProducts()
    }
    )
  }

  //this function calculate taxes, total price
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    let tempTax = subTotal * 0.1;
    let tax = parseFloat(tempTax.toFixed(2));
    let total = tax + subTotal;
    this.setState(
      () => {
        return {
          cartSubTotal: subTotal,
          cartTax: tax,
          cartTotal: total
        }
      }
    )
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart:    this.addToCart,
        openModal:    this.openModal,
        closeModal:   this.closeModal,
        increment:    this.increment,
        decrement:    this.decrement,
        removeItem:   this.removeItem,
        clearCart:    this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }