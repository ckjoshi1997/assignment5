/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

export default class ItemAdd extends React.Component {
  // simple constructor, sets price state to blank
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { price: '' };
  }

  // on submit
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.itemAdd;
    const item = {
      name: form.name.value,
      category: form.category.value,
      price: this.state.price,
      image: form.image.value,
    };
    // reset values
    const { createItem } = this.props;
    createItem(item);
    form.name.value = '';
    this.setState({ price: '' });
    form.category.value = '';
    form.image.value = '';
  }

  render() {
    return (
      <form name="itemAdd" onSubmit={this.handleSubmit}>
        <label htmlFor="category">
          Category
          <select name="category">
            <option value="Shirts">Shirts</option>
            <option value="Jeans">Jeans</option>
            <option value="Jackets">Jackets</option>
            <option value="Sweaters">Sweaters</option>
            <option value="Accessories">Accessories</option>
          </select>
        </label>

        <label htmlFor="price">
          Price Per Unit
          <input
            type="text"
            name="price"
            value={`$${this.state.price}`}
            onChange={(e) => {
              const newValue = e.target.value.split('$')[1] || '';
              this.setState({ price: newValue });
            }}
          />
        </label>

        <label htmlFor="name">
          Item Name
          <input type="text" name="name" />
        </label>

        <label htmlFor="image">
          Image URL
          <input type="text" name="image" />
        </label>

        <button>Add Item</button>
      </form>
    );
  }
}
