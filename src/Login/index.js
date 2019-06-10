/**
 * Implement Facebook and Google signin here, you are free to use your customised
 * design, but ensure you use our predifined ID and classes
 */
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from '../Navbar';
import { withToastManager } from 'react-toast-notifications';
import FacebookLogin from 'react-facebook-login';
import '../utils/toastrconfig';
import './style.scss';

export class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    productIncart: [],
    total_price: '0.00',
    cart_id: '',
    isLoggedIn: false,
    disabledButton: false
  }

  async componentDidMount() {
   
  }

  setUserData = (event) => {
    const { errors } = this.state;
    const newErrors = { ...errors, [event.target.name]: '' }
    this.setState({ [event.target.name]: event.target.value, errors: newErrors })
  }

  loginUser = async (event) => {
  
  }

  componentClicked = () => console.log('Clicked it')

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
        <div className="login-container">
          <h5 className="sign-up-text">Login</h5>
          <Form id="signInForm" className="form-class">
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
        <p className="new-account">New to our platform?
            <span
              onClick={() => history.push('/signup')}
              style={{ color: '#de3624', cursor: 'pointer', marginLeft: 5 }}>
              Sign up
            </span>
          </p>
          <button
            id="btnFormSignIn"
            className="signup-button-class"
            onClick={this.loginUser}
            disabled={disabledButton}
          >
            {disabledButton ? '.....' : 'Login'}
          </button>
          <p className="or">or</p>
          <div className="btnFacebook" style={{ alignSelf: 'center' }}>
            {fbContent}
          </div>
          <button id="btnGoogle" className="btn">Google Signin Here</button>
      </Form>
        </div>
      </div>
    )
  }
}

const LoginFormWithToast = withToastManager(Login);

export default LoginFormWithToast;
