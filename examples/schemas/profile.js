module.exports = {
  type: 'Object', /* Main Parent type: Object or Array */
  fields: { /* fields of Object */
    id: {
      type: 'Number', /* type: Number */
      required: true, /* Required: true, or else considered false */
    },
    firstName: {
      type: 'String', /* type: String */
      required: true,
      test: /^[a-zA-Z]{2,12}/,  /* test: assign regex */
    },
    lastName: {
      type: 'String',
      default: '',  /* default assignment, only if Required: false */
    },
    age: {
      type: 'Number',
      required: true,
      range: {  /* Assign range -> min, max (for type: Number) */
        min: 18,
      },
    },
    hobbies: {
      type: 'Array',  /* Type: Array */
      length: { /* Assign length -> min, max (for type: Array) */
        min: 1,
        max: 5,
      },
      children: { /* chilren of array */
        type: 'String',
      },
    },
    sports: {
      type: 'Array',
      default: [],  /* default assignment for array */
      children: {
        type: 'String',
      },
    },
    address: {
      type: 'Object', /* type: Object */
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
