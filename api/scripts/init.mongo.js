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
    image: 'https://cdn7.bigcommerce.com/s-8a33z/product_images/uploaded_images/mens-size-42-jeans-thumb-w500.png',
    description: 'Steps to recreate the problem:'
      + '\n1. Refresh the browser.'
      + '\n2. Select "New" in the filter'
      + '\n3. Refresh the browser again. Note the warning in the console:'
      + '\n  Warning: Hash history cannot PUSH the same path; a new entry'
      + '\n  will not be added to the history stack'
      + '\n4. Click on Add.'
      + '\n5. There is an error in console, and add doesn\'t work.',
  },
  {
    id: 2,
    name: 'Test Shirts',
    category: 'Shirts',
    price: 5.12,
    image: 'https://target.scene7.com/is/image/Target/GUEST_8bce6d5a-75d1-45dc-93d7-2323f0959216?wid=488&hei=488&fmt=pjpeg',
    description: 'There needs to be a border in the bottom in the panel'
      + ' that appears when clicking on Add',
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
