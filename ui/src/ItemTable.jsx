import React from 'react';
import { Link } from 'react-router-dom';

function ItemRow({ item }) {
  return (
    <tr>
      {/* <td>{item.id}</td> */}
      <td>{item.name}</td>
      <td>{`$${item.price}`}</td>

      <td>{item.category}</td>
      <td>
        <a href={item.image} target="_blank" rel="noreferrer">View</a>
      </td>
      <td><Link to={`/edit/${item.id}`}>Edit</Link></td>
    </tr>
  );
}

export default function ItemTable({ items }) {
  const itemRows = items.map(item => (
    <ItemRow key={item.id} item={item} />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
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
