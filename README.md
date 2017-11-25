# Ratify

> Ratify is a fast & small JSON schema validation library

### Installation
    npm install ratify-js


### Apply Schema on Data

```js
const { ratify } = require('ratify-js');
ratify(schema, data);
```


### Define schema

```js
module.exports = {
  type: 'Object',
  fields: {
    id: {
      type: 'Number',
      required: true,
    },
    firstName: {
      type: 'String',
      required: true,
    },
    lastName: {
      type: 'String',
      default: '',
    },
    age: {
      type: 'Number',
      required: true,
      range: {
        min: 18,
      },
    },
    hobbies: {
      type: 'Array',
      length: {
        min: 1,
        max: 5,
      },
      children: {
        type: 'String',
      },
    },
    sports: {
      type: 'Array',
      default: [],
      children: {
        type: 'String',
      },
    },
    address: {
      type: 'Object',
      fields: {
        street: {
          type: 'String',
          required: true,
        },
        city: {
          type: 'String',
          required: true,
        },
        state: {
          type: 'String',
          required: true,
        },
        pin: {
          type: 'String',
        },
      },
    },
  },
};
```

### A sample JSON conforming to the above schema

```js
module.exports = {
  id: 123456,
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  hobbies: ['reading', 'cinema'],
  sports: ['volley-ball', 'badminton'],
  address: {
    street: '890 Fifth Avenue, Manhattan',
    city: 'New York City',
    state: 'New York',
    pin: '',
  },
};
```
