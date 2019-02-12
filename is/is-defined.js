/**
 * Determine if an object or variable is either:
 *
 *  1. defined in the current scope
 *  2. not assigned to the value: undefined
 *
 * @param {*} candidate
 *
 * @return {boolean} true if the argument defined in the current scope or not assigned to the value undefined, false
 *                        otherwise
 *
 * isArray(candidate)
 */

/**********************************************************************************************************************/


import isUndefined from './is-undefined';

export default (candidate) => !isUndefined(candidate);
