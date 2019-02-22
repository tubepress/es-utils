/**
 * Determine if a string ends with another string.
 *
 * @param {string} haystack the subject string
 * @param {string} needle   the string to search for
 *
 * @return {boolean} true if the haystack ends with the needle
 *
 * endsWith('foobar', 'bar')
 */

/**********************************************************************************************************************/

export default (haystack, needle) => haystack.substr(-needle.length) === needle;
