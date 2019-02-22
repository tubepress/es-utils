/**
 * Determine if an object or variable is either:
 *
 *  1. NOT defined in the current scope
 *  2. assigned to the value: undefined
 *
 * @param {*} candidate
 *
 * @return {boolean} true if the argument is not defined in the current scope or assigned to the value undefined, false
 *                        otherwise
 *
 * isArray(candidate)
 */

/**********************************************************************************************************************/


export default (candidate) => typeof candidate === 'undefined';
