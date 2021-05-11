import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const ItemRow = withRouter(({ item, location: { search } }) => {
  const selectLocation = { pathname: `/items/${item.id}`, search };
  return (
    <tr>
      {/* <td>{item.id}</td> */}
      <td>{item.name}</td>
      <td>{`$${item.price}`}</td>

      <td>{item.category}</td>
      <td>
        <a href={item.image} target="_blank" rel="noreferrer">View</a>
      </td>
      <td>
        <Link to={`/edit/${item.id}`}>Edit</Link>
        {' | '}
        <NavLink to={selectLocation}>Select</NavLink>
      </td>
    </tr>
  );
});

export default function ItemTable({ items }) {
  const itemRows = items.map(item => (
    <ItemRow key={item.id} item={item} />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {itemRows}
      </tbody>
    </table>
  );
}
