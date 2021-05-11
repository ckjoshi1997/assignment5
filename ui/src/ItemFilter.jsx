import React from 'react';
import { withRouter } from 'react-router-dom';

class ItemFilter extends React.Component {
  constructor() {
    super();
    this.onChangeCategory = this.onChangeCategory.bind(this);
  }

  onChangeCategory(e) {
    const category = e.target.value;
    const { history } = this.props;
    history.push({
      pathname: '/items',
      search: category ? `?category=${category}` : '',
    });
  }

  render() {
    return (
      <div>
        Category:
        {' '}
        <select onChange={this.onChangeCategory}>
          <option value="">(All)</option>
          <option value="Jeans">Jeans</option>
          <option value="Shirts">Shirts</option>
          <option value="Jackets">Jackets</option>
          <option value="Sweaters">Sweaters</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
    );
  }
}
export default withRouter(ItemFilter);
