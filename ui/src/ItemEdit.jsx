import React from 'react';
import { Link } from 'react-router-dom';

import graphQLFetch from './graphQLFetch.js';
import NumInput from './NumInput.jsx';
import TextInput from './TextInput.jsx';

export default class ItemEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      item: {},
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (id !== prevId) {
      this.loadData();
    }
  }

  onChange(event, naturalValue) {
    const { name, value: textValue } = event.target;
    const value = naturalValue === undefined ? textValue : naturalValue;
    this.setState(prevState => ({
      item: { ...prevState.item, [name]: value },
    }));
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { item, invalidFields } = this.state;
    if (Object.keys(invalidFields).length !== 0) return;
    const query = `mutation itemUpdate(
      $id: Int!
      $changes: ItemUpdateInputs!
    ) {
      itemUpdate(
        id: $id
        changes: $changes
      ) {
        id name category image
        price description
      }
    }`;
    const { id, created, ...changes } = item;
    const data = await graphQLFetch(query, { changes, id });
    if (data) {
      this.setState({ item: data.itemUpdate });
      alert('Updated item successfully'); // eslint-disable-line no-alert
    }
  }

  async loadData() {
    const query = `query item($id: Int!) {
      item(id: $id) {
        id name category image
        price description
      }
    }`;
    const { match: { params: { id } } } = this.props;
    const data = await graphQLFetch(query, { id });
    this.setState({ item: data ? data.item : {}, invalidFields: {} });
  }

  render() {
    const { item: { id } } = this.state;
    const { match: { params: { id: propsId } } } = this.props;
    if (id == null) {
      if (propsId != null) {
        return <h3>{`Item with ID ${propsId} not found.`}</h3>;
      }
      return null;
    }
    const { item: { name, category } } = this.state;
    const { item: { image, price, description } } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{`Editing item: ${id}`}</h3>
        <table>
          <tbody>
            <tr>
              <td>Category:</td>
              <td>
                <select name="category" value={category} onChange={this.onChange}>
                  <option value="Jeans">Jeans</option>
                  <option value="Shirts">Shirts</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Sweaters">Sweaters</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Image:</td>
              <td>
                <TextInput
                  name="image"
                  value={image}
                  onChange={this.onChange}
                  key={id}
                />
              </td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>
                <NumInput
                  name="price"
                  value={price}
                  onChange={this.onChange}
                  key={id}
                />
              </td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>
                <TextInput
                  size={50}
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  key={id}
                />
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <TextInput
                  tag="textarea"
                  rows={8}
                  cols={50}
                  name="description"
                  value={description}
                  onChange={this.onChange}
                  key={id}
                />
              </td>
            </tr>
            <tr>
              <td />
              <td><button type="submit">Submit</button></td>
            </tr>
          </tbody>
        </table>
        <Link to={`/edit/${id - 1}`}>Prev</Link>
        {' | '}
        <Link to={`/edit/${id + 1}`}>Next</Link>
      </form>
    );
  }
}
