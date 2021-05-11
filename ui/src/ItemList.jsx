
/* eslint "react/jsx-no-undef": "off" */

import React from 'react';
import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';

import ItemFilter from './ItemFilter.jsx';
import ItemTable from './ItemTable.jsx';
import ItemAdd from './ItemAdd.jsx';
import ItemDetail from './ItemDetail.jsx';
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

    const priceMin = parseInt(params.get('priceMin'), 10);
    if (!Number.isNaN(priceMin)) vars.priceMin = priceMin;
    const priceMax = parseInt(params.get('priceMax'), 10);
    if (!Number.isNaN(priceMax)) vars.priceMax = priceMax;

    const query = `query productList(
      $category: ProductType
      $priceMin: Float
      $priceMax: Float
    ) {
      productList(
        category: $category
        priceMin: $priceMin
        priceMax: $priceMax
      ) {
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
    const { match } = this.props;
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <hr />
        <ItemFilter />
        <hr />
        <ItemTable items={items} />
        <hr />
        <ItemAdd createItem={this.createItem} />
        <hr />
        <Route path={`${match.path}/:id`} component={ItemDetail} />
      </React.Fragment>
    );
  }
}
