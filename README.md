# TubePress ECMAScript Utilities

A collection of application-agnostic ES6 modules with the following goals:
 
1. Modules should provide stable interfaces to accomplish common tasks
1. Module implementations should be lightweight, high-quality, and may be 3rd-party
1. Modules must support ES5 environments (after transpilation)

## List of modules

* **DOM**
  * `add-ready-handler` : adds a DOM-ready callback
* **function**
  * `debounce` : throttle the invocation of a function
* **is**
  * `is-array` : determine if an item is an array
  * `is-defined` : determine if an item is defined
  * `is-string` : determine if an item is a string
  * `is-undefined` : determine if an item is undefined
* **object**
  * `assign` : universal `Object.assign()`
  * `has-own-property` : `Object.hasOwnProperty()` that also accepts nested keys
* **string**
  * `ends-with` : determine if a string ends with another string

## Example Usage

```javascript
import endsWith from '@tubepress/es-utils/string/ends-with';

if (endsWith('foo-bar', 'bar')) {
  ...
}
```