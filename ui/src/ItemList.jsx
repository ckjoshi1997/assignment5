
/* eslint "react/jsx-no-undef": "off" */

import React from 'react';
import URLSearchParams from 'url-search-params';
import ItemFilter from './ItemFilter.jsx';
import ItemTable from './ItemTable.jsx';
import ItemAdd from './ItemAdd.jsx';
import graphQLFetch from './graphQLFetch.js';

// list class
export default class ItemList extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
    this.createItem = this.createItem.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { location: { search: prevSearch } } = prevProps;
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async loadData() {
    const { location: { search } } = this.props;
    const params = new URLSearchParams(search);
    const vars = {};
    if (params.get('category')) vars.category = params.get('category');

    const query = `query productList($category: ProductType) {
      productList(category: $category) {
        id category name price image
      }
    }`;

    const data = await graphQLFetch(query, vars);
    if (data) {
      this.setState({ items: data.productList });
    }
  }

  // create item and add to graphql
  async createItem(item) {
    const query = `mutation {
        productAdd(product:{
            name: "${item.name}",
            category: ${item.category},
            price: ${item.price},
            image: "${item.image}", 
        }) {
                id
            }
        }`;

    const data = await graphQLFetch(query, { item });
    if (data) {
      this.loadData();
    }
  }

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <hr />
        <ItemFilter />
        <hr />
        <ItemTable items={items} />
        <hr />
        <ItemAdd createItem={this.createItem} />
      </React.Fragment>
    );
  }
}
