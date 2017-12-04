const { Types, } = require('../../lib');

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
