# Ratify JS

> Ratify JS is a fast & small JSON schema validation library

### Installation
    npm install ratify-js


### Apply Schema on Data

```js
const { ratify } = require('ratify-js');

// Usage 1 - direct approach
ratify(schema, data);

// Usage 2 - curried approach
const schemaValidator = ratify(schema);
schemaValidator(data);
```


### Define schema

```js
const { Types, } = require('ratify-js');

module.exports = {
  type: Types.Object, /* Main Parent type: Object or Array */
  fields: { /* fields of Object */
    id: {
      type: Types.Number, /* type: Number */
      required: true, /* Required: true, or else considered false */
    },
    firstName: {
      type: Types.String, /* type: String */
      required: true,
      test: /^[a-zA-Z]{2,12}/,  /* test: assign regex */
    },
    lastName: {
      type: Types.String,
      default: '',  /* default assignment, only if Required: false */
    },
    age: {
      type: Types.Number,
      required: true,
      range: {  /* Assign range -> min, max (for type: Number) */
        min: 18,
      },
    },
    hobbies: {
      type: Types.Array,  /* Type: Array */
      length: { /* Assign length -> min, max (for type: Array) */
        min: 1,
        max: 5,
      },
      children: { /* chilren of array */
        type: Types.String,
      },
    },
    sports: {
      type: Types.Array,
      default: [],  /* default assignment for array */
      children: {
        type: Types.String,
      },
    },
    address: {
      type: Types.Object, /* type: Object */
      fields: {
        street: {
          type: Types.String,
          required: true,
        },
        city: {
          type: Types.String,
          required: true,
        },
        state: {
          type: Types.String,
          required: true,
        },
        pin: {
          type: Types.String,
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
