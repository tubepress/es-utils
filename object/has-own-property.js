/**
 * An enhanced Object.hasOwnProperty() that supports nested properties.
 *
 * @param {object}       subject the object under inspection
 * @param {string|array} key     the path to the target property
 *
 * hasOwnProperty(obj, 'foo')
 *
 * hasOwnProperty(obj, ['foo', 'bar'])
 */

/**********************************************************************************************************************/


import isArray from '../is/is-array';

const simpleHasProp = (o, k) => o.hasOwnProperty(k);

export default (object, key) => {

  if (!object) {

    return false;
  }

  if (!isArray(key)) {

    return simpleHasProp(object, key);
  }

  if (key.length === 0) {

    return false;
  }

  let o = object;

  return key.every((segment) => {

    if (!simpleHasProp(o, segment)) {

      return false;
    }

    o = o[segment];

    return true;
  });
};
