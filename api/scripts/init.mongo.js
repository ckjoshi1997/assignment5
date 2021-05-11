/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo issuetracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://cjoshi:Yash2010@cs-648-02.sy6oc.mongodb.net/products scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/issuetracker scripts/init.mongo.js
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

db.products.remove({});

const productsDB = [
  {
    id: 1,
    name: 'Test Jeans',
    category: 'Jeans',
    price: 42.42,
    image: 'Error in console when clicking Add',
  },
  {
    id: 2,
    name: 'Test Shirts',
    category: 'Shirts',
    price: 5.12,
    image: 'Error in console when clicking Add',
  },
];

db.products.insertMany(productsDB);
const count = db.products.count();
print('Inserted', count, 'products');

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ status: 1 });
db.products.createIndex({ owner: 1 });
db.products.createIndex({ created: 1 });
