/**
 * Debounce a function.
 *
 * @param {fn}            subject   function
 * @param {int}           wait      time to delay, in milliseconds
 * @param {boolean=false} immediate set to true to trigger the function on the leading edge instead of the trailing edge
 *                                  of the wait interval
 *
 * debounce(fn, wait, immediate = false)
 */

/**********************************************************************************************************************/


// https://github.com/component/debounce

import debounce from 'debounce';

export default debounce;
