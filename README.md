# Curry

Simple ES6 curry functions

## Usage

```
$ npm install ck-curry --save
```

### Node

```javascript
/// ES Modules
import {curry, curryAll} from 'ck-curry'

// node
var curry = require("ck-curry").curry
var curryAll = require("ck-curry").curryAll
```

```javascript
let f = (a, b, c) => {
  console.log(a, b, c)
}

let g = (a, b, c) => {
  console.log(a + 1 , b + 2, c + 3)
}

// Curry
const a = curry(f)
// => fn
const b = b(1)
// => fn
const c = b(2)
// => fn
c(3)
// => 1, 2, 3

// Curry All
[f, g] = curryAll(f, g)
f(1)
// => fn
f(1)(1)
// => fn
f(1)(1)(1)
// => 1, 1, 1
g(1)
// => fn
g(1)(1)
// => fn
g(1)(1)(1)
// => 2, 3, 4
```

## License

MIT - see LICENSE.md
