# Ratify

> Ratify is a fast & small JSON schema validation library

### Define schema

```js
module.exports = {
  type: 'Array',
  length: {
    max: 10,
  },
  default: [],
  children: {
    type: 'Object',
    fields: {
      firstName: {
        type: 'String',
        required: true,
        test: /^[a-zA-Z]{2,12}/,
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
      languages: {
        type: 'Array',
        length: {
          min: 1,
          max: 5,
        },
        required: true,
        children: {
          type: 'String',
        }
      }
    }
  }
};
```

### Apply schema test on data

```js
const { ratify } = require('../lib');
ratify(schema, data);
```
