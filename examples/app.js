const { ratify } = require('../lib');
const schemas = {
  users: require('./schemas/users'),
};
const data = {
  users: require('./data/users'),
};

ratify(schemas.users, data.users);
console.log(data.users);
