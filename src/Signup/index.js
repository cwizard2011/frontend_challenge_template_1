import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import { withToastManager } from 'react-toast-notifications'
import Navbar from '../Navbar';
import '../utils/toastrconfig';
import './style.scss';

export class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    errors: {

    },
    cart_id: '',
    productIncart: [],
    total_price: '0.00',
    isLoggedIn: false,
    disabledButton: false
  }

  async componentDidMount() {
    
  }

  setUserData = (event) => {
   
  }

  signUpUser = async (event) => {
  
  }

  responseFacebook = async(response) => {
    
  }

  render() {
    let fbContent;
    const { history } = this.props;
    const { errors, productIncart, total_price, isLoggedIn, disabledButton } = this.state;
    if (isLoggedIn) {

    } else {
      fbContent = (
        <FacebookLogin
          appId="352854622106208"
          fields="name,email,picture"
          onClick={() => this.componentClicked()}
          callback={(response) => this.responseFacebook(response)}
          cssClass="kep-login-facebook metro"
          />
      )
    }
    return (
      <div>
        <Navbar
          history={history}
          productIncart={productIncart}
          cartPrice={total_price}
        />
        <div className="signup-container">
          <h5 className="sign-up-text">Sign up</h5>
          <Form id="registerForm" className="form-class">
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={this.setUserData}
            className={errors.name ? 'error-input-field' : ''}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            className={errors.email ? 'error-input-field' : ''}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.setUserData}
            />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            className={errors.password ? 'error-input-field' : ''}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.setUserData}
            />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </FormGroup>
        <p className="new-account">Already have an account?
            <span
              onClick={() => history.push('/login')}
              style={{ color: '#de3624', cursor: 'pointer', marginLeft: 5 }}>
              Login
            </span>
          </p>
          <button
            id="btnFormRegister"
            className="signup-button-class"
            onClick={this.signUpUser}
            disabled={disabledButton}
          >
            {disabledButton ? '....' : 'Register'}
          </button>
          <p className="or">Or</p>
          <div style={{ alignSelf: 'center' }}>
            {fbContent}
          </div>
      </Form>
        </div>
      </div>
    )
  }
}

const SignupWithToast = withToastManager(Signup);

export default SignupWithToast;
