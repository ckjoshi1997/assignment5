import React from 'react';
import { Link } from 'react-router-dom';

import graphQLFetch from './graphQLFetch.js';

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

  onChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      item: { ...prevState.item, [name]: value },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { item } = this.state;
    console.log(item); // eslint-disable-line no-console
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
    if (data) {
      const { item } = data;
      item.price = item.price != null ? item.price.toString() : '';
      item.image = item.image != null ? item.image : '';
      item.description = item.description != null ? item.description : '';
      this.setState({ item });
    } else {
      this.setState({ item: {} });
    }
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
                <input
                  name="image"
                  value={image}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>
                <input
                  name="price"
                  value={price}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  size={50}
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <textarea
                  rows={8}
                  cols={50}
                  name="description"
                  value={description}
                  onChange={this.onChange}
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
