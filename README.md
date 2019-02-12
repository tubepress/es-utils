# TubePress ECMAScript Utilities

A collection of application-agnostic ES6 modules with the following goals:
 
1. Modules should provide stable interfaces to accomplish common tasks
1. Module implementations should be lightweight, high-quality, and may be 3rd-party
1. Modules must support ES5 environments (after transpilation)

## List of modules

* **DOM**
  * [`add-ready-handler`](src/dom/add-ready-handler.js) : adds a DOM-ready callback
* **function**
  * [`debounce`](src/function/debounce.js) : throttle the invocation of a function
* **is**
  * [`is-array`](src/is/is-array.js) : determine if an item is an array
  * [`is-defined`](src/is/is-defined.js) : determine if an item is defined
  * [`is-string`](src/is/is-string.js) : determine if an item is a string
  * [`is-undefined`](src/is/is-undefined.js) : determine if an item is undefined
* **object**
  * [`assign`](src/object/assign.js) : universal `Object.assign()`
  * [`has-own-property`](src/object/has-own-property.js) : `Object.hasOwnProperty()` that also accepts nested keys
* **string**
  * [`ends-with`](src/string/ends-with.js) : determine if a string ends with another string

## Example Usage

```javascript
import endsWith from '@tubepress/es-utils/string/ends-with';

if (endsWith('foo-bar', 'bar')) {
  ...
}
```