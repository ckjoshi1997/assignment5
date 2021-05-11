// const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function get(_, { id }) {
  const db = getDb();
  const item = await db.collection('items').findOne({ id });
  return item;
}

async function list(_, { category, priceMin, priceMax }) {
  const db = getDb();
  const filter = {};
  if (category) filter.category = category;
  if (priceMin !== undefined || priceMax !== undefined) {
    filter.price = {};
    if (priceMin !== undefined) filter.price.$gte = priceMin;
    if (priceMax !== undefined) filter.price.$lte = priceMax;
  }
  const items = await db.collection('items').find(filter).toArray();
  return items;
}

async function add(_, { item }) {
  const db = getDb();
  const newItem = Object.assign({}, item);
  newItem.id = await getNextSequence('items');
  const result = await db.collection('items').insertOne(newItem);
  const savedItem = await db.collection('items').findOne({ _id: result.insertedId });
  return savedItem;
}

module.exports = { list, add, get };
