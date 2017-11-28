const Types = {
  Array: 'array',
  Object: 'object',
  String: 'string',
  Number: 'number',
};

const throwErr = (msg, e) => { throw new Error(`${msg} ${e ? e : ''}`); };
const getLC = (x) => (x || '').toLowerCase();
const isArray = (s, d) => getLC(s.type) === Types.Array && d instanceof Array;
const isObject = (s, d) => getLC(s.type) === Types.Object && d instanceof Object;
const isString = (s, d) => getLC(s.type) === Types.String && (d instanceof String || typeof d === Types.String);
const isNumber = (s, d) => getLC(s.type) === Types.Number && (d instanceof Number || typeof d === Types.Number);

const ratify = (s, d) => {
  if (isArray(s, d)) {
    processArray(s, d);
  } else if (isObject(s, d)) {
    processObject(s, d);
  } else if (isString(s, d)) {
    sanitize(s, d);
  } else if (isNumber(s, d)) {
    sanitize(s, d);
  } else {
    throwErr('Unkown type');
  }
};

const processArray = (s, d) => {
  sanitize(s, d);
  if (s.children)
    d.forEach(item => ratify(s.children, item));
};

const processObject = (s, d) => {
  const dataFields = Object.keys(d);
  const schemeFields = Object.keys(s.fields);
  schemeFields.forEach(field => {
    const fieldScheme = s.fields[field];
    if (dataFields.includes(field)) {
      ratify(fieldScheme, d[field]);
    } else {
      if (fieldScheme.required)
        throwErr('Required field missing ->', field);
      d[field] = fieldScheme.default;
    }
  });
};

const sanitize = (s, d) => {
  if (s.required && !d) {
    throwErr('Required field cannot be empty ->', s);
  }
  if (!d && s.default) {
    d = s.default;
  }
  if (s.test) {
    !s.test.test(d) ? throwErr('String regex error ->', d) : '';
  }
  if (s.range) {
    if (s.range.max && d > s.range.max)
      throwErr(`Range error -> max: ${s.range.max}, got ->`, d);
    if (s.range.min && d < s.range.min)
      throwErr(`Range error -> min: ${s.range.min}, got ->`, d);
  }
  if (s.length) {
    if (s.length.max && d.length > s.length.max)
      throwErr(`Array oversized -> max: ${s.length.max}, got ->`, d);
    if (s.length.min && d.length < s.length.min)
      throwErr(`Array undersized -> min: ${s.length.min}, got ->`, d);
  }
};

module.exports = {
  ratify,
};
