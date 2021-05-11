// const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function list(_, { category }) {
  const db = getDb();
  const filter = {};
  if (category) filter.category = category;
  const products = await db.collection('products').find(filter).toArray();
  return products;
}

async function add(_, { product }) {
  const db = getDb();
  const newProduct = Object.assign({}, product);
  newProduct.id = await getNextSequence('products');
  const result = await db.collection('products').insertOne(newProduct);
  const savedProduct = await db.collection('products').findOne({ _id: result.insertedId });
  return savedProduct;
}

module.exports = { list, add };
