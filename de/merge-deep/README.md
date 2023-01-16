# merge-deep [![NPM version](https://img.shields.io/npm/v/merge-deep.svg?style=flat)](https://www.npmjs.com/package/merge-deep) [![NPM monthly downloads](https://img.shields.io/npm/dm/merge-deep.svg?style=flat)](https://npmjs.org/package/merge-deep) [![NPM total downloads](https://img.shields.io/npm/dt/merge-deep.svg?style=flat)](https://npmjs.org/package/merge-deep) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/merge-deep.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/merge-deep)

> Recursively merge values in a javascript object.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save merge-deep
```

Based on [mout's](https://github.com/mout/mout) implementation of merge

## Usage

```js
var merge = require('merge-deep');

merge({a: {b: {c: 'c', d: 'd'}}}, {a: {b: {e: 'e', f: 'f'}}});
//=> { a: { b: { c: 'c', d: 'd', e: 'e', f: 'f' } } }
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [assign-deep](https://www.npmjs.com/package/assign-deep): Deeply assign the values of all enumerable-own-properties and symbols from one or more source objects… [more](https://github.com/jonschlinkert/assign-deep) | [homepage](https://github.com/jonschlinkert/assign-deep "Deeply assign the values of all enumerable-own-properties and symbols from one or more source objects to a target object. Returns the target object.")
* [defaults-deep](https://www.npmjs.com/package/defaults-deep): Like `extend` but recursively copies only the missing properties/values to the target object. | [homepage](https://github.com/jonschlinkert/defaults-deep "Like `extend` but recursively copies only the missing properties/values to the target object.")
* [extend-shallow](https://www.npmjs.com/package/extend-shallow): Extend an object with the properties of additional objects. node.js/javascript util. | [homepage](https://github.com/jonschlinkert/extend-shallow "Extend an object with the properties of additional objects. node.js/javascript util.")
* [merge-deep](https://www.npmjs.com/package/merge-deep): Recursively merge values in a javascript object. | [homepage](https://github.com/jonschlinkert/merge-deep "Recursively merge values in a javascript object.")
* [mixin-deep](https://www.npmjs.com/package/mixin-deep): Deeply mix the properties of objects into the first object. Like merge-deep, but doesn't clone… [more](https://github.com/jonschlinkert/mixin-deep) | [homepage](https://github.com/jonschlinkert/mixin-deep "Deeply mix the properties of objects into the first object. Like merge-deep, but doesn't clone. No dependencies.")
* [omit-deep](https://www.npmjs.com/package/omit-deep): Recursively omit the specified key or keys from an object. | [homepage](https://github.com/jonschlinkert/omit-deep "Recursively omit the specified key or keys from an object.")

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 32 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 8  | [doowb](https://github.com/doowb) |  

### Author

**Jon Schlinkert**

* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)
* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)

### License

Copyright © 2021, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.8.0, on January 11, 2021._