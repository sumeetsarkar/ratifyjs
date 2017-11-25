const ratify = (schema, data) => {
  if (isArray(schema, data)) {
    processArray(schema, data);
  } else if (isObject(schema, data)) {
    processObject(schema, data);
  } else if (isString(schema, data)) {
    sanitize(schema, data);
  } else if (isNumber(schema, data)) {
    sanitize(schema, data);
  } else {
    throwErr('Unkown schema');
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
        throwErr('Required field missing');
      d[field] = fieldScheme.default;
    }
  });
};

const throwErr = (msg, e) => { throw new Error(`${msg} ${e ? e : ''}`); };

const isArray = (s, d) => (s.type || '').toLowerCase() === 'array' && d instanceof Array;
const isObject = (s, d) => (s.type || '').toLowerCase() === 'object' && d instanceof Object;
const isString = (s, d) => (s.type || '').toLowerCase() === 'string' && (d instanceof String || typeof d === 'string');
const isNumber = (s, d) => (s.type || '').toLowerCase() === 'number' && (d instanceof Number || typeof d === 'number');

const sanitize = (s, d) => {
  if (s.required && !d) {
    throwErr('Required field missing');
  }
  if (!d && s.default) {
    d = s.default;
  }
  if (s.test) {
    !s.test.test(d) ? throwErr('String regex error') : '';
  }
  if (s.range) {
    if (s.range.max && d > s.range.max)
      throwErr('Number bigger than max');
    if (s.range.min && d < s.range.min)
      throwErr('Number smaller than max');
  }
  if (s.length) {
    if (s.length.max && d.length > s.length.max)
      throwErr('Array oversized');
    if (s.length.min && d.length < s.length.min)
      throwErr('Array undersized');
  }
};

module.exports = {
  ratify,
};
