/**
 * Appends a <script> node to the <head> element in the DOM.
 *
 * @param {string}   url the URL to the script. may be absolute or relative.
 * @param {function} cb  a callback function of the following interface: function(err, script) {} where err is an error
 *                       if any occurred and script is the script node that was appended to the DOM.
 *
 * loadScript(url, cb)
 */

/**********************************************************************************************************************/


// https://github.com/feross/load-script2

import loadScript from 'load-script2';

export default loadScript;
