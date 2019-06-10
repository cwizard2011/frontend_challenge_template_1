import React, { Component } from 'react';
import { withToastManager } from 'react-toast-notifications';
import Navbar from '../Navbar';
import { Table } from 'reactstrap';
import Spinner from '../Spinner';
import './styles.scss';

export class Cart extends Component {
  state = {
    productIncart: [],
    total_price: '',
    cartID: '',
    isLoading: false,
    isLoggedIn: false
  }

  async componentDidMount() {
  }

  changeQuantityCount = async (change, itemID) => {
  }

  placeOrder = async() => {
  }

  removeProductFromCart = async(itemID) => {
  }

  clearCart = async() => {
  }

  render() {
    const { productIncart, total_price, isLoading, isLoggedIn } = this.state;
    const { history } = this.props;
    if (isLoading) {
      return <Spinner />
    }

    return (
      <div id="cart">
        <Navbar
          productIncart={productIncart}
          cartPrice={total_price}
          history={history}
        />
        {productIncart.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: 150 }}>
            <p style={{ fontSize: 25 }}>You have no items in cart</p>
            <button className="back-to-shop"
            onClick={() => history.push('/')}
          >
              Back to Shop
            </button>
          </div>
          )}
          {productIncart.length > 0 &&
          (
            <div className="product-in-cart-wrapper">
              <p>
                {productIncart.length} item(s) in cart
              </p>
              <button
                onClick={this.clearCart}
                >
                Clear Cart
              </button>
            </div>
          )
          }
        {productIncart.length > 0 && <Table>
        <thead>
          <tr>
            <th className="header-styles">Item</th>
            <th className="header-styles">Size</th>
            <th className="header-styles">Color</th>
            <th className="header-styles">Quantity</th>
            <th className="header-styles">Price</th>
          </tr>
        </thead>
        <tbody>
        {
          productIncart.map((product, index) => (
            <tr key={index}>
              <td>
              {product.image &&
              <div style={{ display: 'flex' }}>
              <img
                  src={require(`../assets/product_images/${product.image}`)}
                  alt=""
                  style={{
                    height: 80,
                    width: 80
                  }}
                />
                <div style={{ marginLeft: 15 }}>
                  <p className="cart-item-title" style={{ fontFamily: 'Montserrat' }}>{product.name}</p>
                  <i
                    className="fas fa-times cart-item-remove" style={{ color: 'red', marginRight: 10, cursor: 'pointer' }}
                    onClick={() => this.removeProductFromCart(product.item_id)}
                  >
                  </i>
                  <span style={{ fontFamily: 'Montserrat', fontSize: 14 }}>Remove</span>
                </div>
                </div>
                }
              </td>
              <td className="cart-item-size" style={{ fontFamily: 'Montserrat' }}>{product.attributes.split(',')[0] || 'N/A'}</td>
              <td className="cart-item-color" style={{ fontFamily: 'Montserrat' }}>{product.attributes.split(',')[1] || 'N/A'}</td>
              <td style={{ display: 'flex' }}>
                <div className="decrement">
                  <p
                    className="decrease-quantity"
                    onClick={() => this.changeQuantityCount('remove', product.item_id)}
                  >
                    -
                  </p>
                </div>
                <p style={{
                  backgroundColor: '#FFF',
                  borderStyle: 'solid',
                  borderWidth: 'thin',
                  borderColor: '#D3D3D3',
                  borderRadius: '50%',
                  width: 30,
                  textAlign: 'center',
                  marginTop: -3,
                  fontFamily: 'Montserrat'
                }}
                className="cart-item-quantity"
                >{product.quantity}</p>
                <div className="increment">
                  <p
                    className="increase-quantity"
                    onClick={() => this.changeQuantityCount('add', product.item_id)}
                  >
                    +
                  </p>
                </div>
              </td>
              <td className="cart-item-price" style={{ fontFamily: 'Montserrat' }}>${product.subtotal}</td>
            </tr>
          ))
        }
        <tr>
          <td>
            Total
          </td>
          <td id="cartTotalPriceValue">
            ${total_price}
          </td>
        </tr>
        </tbody>
      </Table>}
        {productIncart.length > 0 && <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button className="back-to-shop"
            onClick={() => history.push('/')}
          >
            Back to shop
          </button>
          {isLoggedIn ?
          (
            <button
              id="btnCheckout"
              className="cart-checkout-button"
              onClick={() => history.push('/checkout')}
            >
              Checkout
            </button>
          ) : <p onClick={() => history.push('/login')} className="login-to-checkout">Log in to proceed to checkout</p>}
        </div>}
      </div>
    )
  }
}

const CartWithToast = withToastManager(Cart);

export default CartWithToast;
