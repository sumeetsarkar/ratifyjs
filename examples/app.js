const { ratify, } = require('../lib');

const load = (arr, dir) =>  arr.reduce((acc,x) => {
  acc[x] = require(`./${dir}/${x}`);
  return acc;
}, {});

const dataSource = ['users', 'profile'];
const schemas = load(dataSource, 'schemas');
const data = load(dataSource, 'data');

// Usage 1 - direct approach
ratify(schemas.users, data.users);

// Usage 2 - curried approach
const profileSchema = ratify(schemas.profile);
profileSchema(data.profile);
