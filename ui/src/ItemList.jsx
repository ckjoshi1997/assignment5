/* globals React */
/* eslint "react/jsx-no-undef": "off" */
// import ItemFilter from './ItemFilter.jsx';
import ItemTable from './ItemTable.jsx';
import ItemAdd from './ItemAdd.jsx';
import graphQLFetch from './graphQLFetch.js';

export default // list class
class ItemList extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
    this.createItem = this.createItem.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      productList {
        id category name price image
      }
    }`;

    const data = await graphQLFetch(query);
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
        <ItemTable items={items} />
        <hr />
        <ItemAdd createItem={this.createItem} />
      </React.Fragment>
    );
  }
}
