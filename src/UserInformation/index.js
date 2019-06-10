import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from '../Navbar';
import { withToastManager } from 'react-toast-notifications';
import './styles.scss';


export class UserInformation extends Component {
  state = {
    productInCart: [],
    total_price: '',
    userObj: {},
    regions: [],
    regionId: 1,
    errors: {},
    disableButton: false
  }

  async componentDidMount() {
  
  }

  updateUserValue = (event) => {
    
  }

  setRegionAndRegionID = (event) => {
   
  }

  updateUserProfile = async() => {
    
  }

  render() {
    const { productInCart, total_price, regions, userObj, errors, disableButton } = this.state;
    const { history } = this.props;
    return (
      <div>
        <Navbar
          productIncart={productInCart}
          cartPrice={total_price}
          history={history}
        />
        <Form style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          width: '30%',
          marginTop: 30
        }}>
          <p style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '600'
          }}>User Profile</p>
          <FormGroup>
            <Label className="label-style" for="exampleEmail">Address 1</Label>
            <Input
              onChange={this.updateUserValue}
              value={userObj.address_1 || ''}
              type="text" name="address_1"
              id="address_1"
              placeholder="Address 1"
              className={errors.address_1 ? 'input-field-profile-error' : ''}
              />
            {errors.address_1 && <p className="profile-field-error">Address 1 is required</p>}
          </FormGroup>
          <FormGroup>
            <Label className="label-style" for="examplePassword">Address 2</Label>
            <Input
              className={errors.address_2 ? 'input-field-profile-error' : ''}
              onChange={this.updateUserValue}
              value={userObj.address_2 || ''}
              type="text"
              name="address_2"
              id="address_2"
              placeholder="Address 2"
              />
            {errors.address_2 && <p className="profile-field-error">Address 2 is required</p>}
          </FormGroup>
          <FormGroup>
            <Label className="label-style" for="examplePassword">City</Label>
            <Input
              className={errors.city ? 'input-field-profile-error' : ''}
              onChange={this.updateUserValue}
              value={userObj.city || ''}
              type="text"
              name="city"
              id="city"
              placeholder="City"
              />
            {errors.city && <p className="profile-field-error">City is required</p>}
          </FormGroup>
          <FormGroup>
            <Label className="label-style" for="exampleSelect">Region</Label>
            <Input
              className={errors.region ? 'input-field-profile-error' : ''}
              onChange={this.setRegionAndRegionID}
              type="select"
              name="region"
              id="region"
            >
              {
                regions && regions.map((region, index) => (
                  <option value={region.shipping_region_id} key={index}>
                    {region.shipping_region}
                  </option>
                ))
              }
              {errors.region && <p className="profile-field-error">Region is required.</p>}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label className="label-style" for="examplePassword">Postal Code</Label>
            <Input
              className={errors.address_1 ? 'input-field-profile-error' : ''}
              onChange={this.updateUserValue}
              value={userObj.postal_code || ''}
              type="text"
              name="postal_code"
              id="postal_code"
              placeholder="Postal Code"
              />
            {errors.postal_code && <p className="profile-field-error">Postal code is required</p>}
          </FormGroup>
          <FormGroup>
            <Label className="label-style" for="examplePassword">Country</Label>
            <Input
              className={errors.country ? 'input-field-profile-error' : ''}
              onChange={this.updateUserValue}
              value={userObj.country || ''}
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              />
            {errors.country && <p className="profile-field-error">Country is required.</p>}
          </FormGroup>
          <Button
            className={disableButton ? "update-profile-submit-button-disabled" : "update-profile-submit-button"}
            onClick={this.updateUserProfile}
            disabled={disableButton}
          >
            {disableButton ? '........' : 'Update Profile'}
          </Button>
        </Form>
      </div>
    )
  }
}

const UserInformationWithToast = withToastManager(UserInformation);

export default UserInformationWithToast;
