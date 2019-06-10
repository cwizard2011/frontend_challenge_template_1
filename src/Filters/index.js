import React, { Component } from 'react';
import { Collapse, FormGroup, Form } from 'reactstrap';
import RadioButton from '../RadioButton';
import './styles.scss';

const CATEGORIES = ['French', 'Italian', 'Irish', 'Animal', 'Flower', 'Christmas', 'Valentine\'s'];
const DEPARTMENTS = ['Regional', 'Nature', 'Seasonal'];

class Filter extends Component {
  state = {
    collapseDepartment: false,
    collapseCategory: false,
    collapseTextDepartment: 'Filter by Department',
    collapseTextCategories: 'Filter by Categories'
  }

  toggleCategory = () => {
   
  }

  toggle = (name) => {

  }

  toggleDepartment = () => {
    
  }

  render() {
    const { collapseTextCategories, collapseTextDepartment } = this.state;
    const { searchedProducts, hasSearched } = this.props;
    return (
      <div className="filter-cards-container">
        <div>
          <p

            disabled={searchedProducts && hasSearched}
            onClick={() => this.toggle('category')}
            className={"filter-cards-button"}
            >
            Filter by Category
          </p>
          <Collapse isOpen={true}>
            <Form>
              <FormGroup tag="fieldset" className="categories">
              {
                CATEGORIES.map((category, index) => (
                  <RadioButton
                    labelText={category}
                    name="category"
                    toggleClick={this.toggleCategory}
                    index={index}
                    categoryText={collapseTextCategories}
                    />
                ))
              }
              </FormGroup>
            </Form>
          </Collapse>
        </div>
        <div>
          <p
            disabled={searchedProducts && hasSearched}
            onClick={() => this.toggle('department')}
            className={"filter-cards-button"}>
            Filter by Department
          </p>
          <Collapse isOpen={true}>
          <Form>
              <FormGroup tag="fieldset" className="department">
              {
                DEPARTMENTS.map((department, index) => (
                  <RadioButton
                    labelText={department}
                    name="department"
                    toggleClick={this.toggleDepartment}
                    index={index}
                    departmentText={collapseTextDepartment}
                  />
                ))
              }
              </FormGroup>
            </Form>
          </Collapse>
        </div>
      </div>
    )
  }
}

export default Filter;
