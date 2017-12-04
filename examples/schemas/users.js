const { Types, } = require('../../lib');

module.exports = {
  type: Types.Array,
  length: {
    max: 10,
  },
  default: [],
  children: {
    type: Types.Object,
    fields: {
      firstName: {
        type: Types.String,
        required: true,
        test: /^[a-zA-Z]{2,12}/,
      },
      lastName: {
        type: Types.String,
        default: '',
      },
      age: {
        type: Types.Number,
        required: true,
        range: {
          min: 18,
        },
      },
      languages: {
        type: Types.Array,
        length: {
          min: 1,
          max: 5,
        },
        required: true,
        children: {
          type: Types.String,
        },
      },
    },
  },
};
