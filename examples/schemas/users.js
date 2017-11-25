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
        },
      },
    },
  },
};
