const { ratify, } = require('../lib');

const load = (arr, dir) =>  arr.reduce((acc,x) => {
  acc[x] = require(`./${dir}/${x}`);
  return acc;
}, {});

const dataSource = ['users', 'profile'];
const schemas = load(dataSource, 'schemas');
const data = load(dataSource, 'data');

ratify(schemas.users, data.users);
ratify(schemas.profile, data.profile);
