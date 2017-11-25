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
