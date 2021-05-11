import React from 'react';

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
        </tr>
      </thead>
      <tbody>
        {itemRows}
      </tbody>
    </table>
  );
}
