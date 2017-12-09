# [`some-own`](https://www.npmjs.com/package/some-own)
Like `[].some` but for objects.

```
npm install some-own
```

```js
const someOwn = require("some-own")
```

## API

### `someOwn(object, callback, scope: undefined)`

#### `@param`

- `object` is the object to iterate
- `callback` receives `(value, key, object)`
- `scope` is the `this` context used to `.call` callback

#### `@return boolean`

- Breaks from the loop and returns `true` if any `callback` iteration result returns truthy
- Else returns `false`


## Usage

```js
const someOwn = require("some-own")
```

```js
someOwn({x: 5, y: 0}, value => value < 0) // false
someOwn({x: -5, y: 0}, value => value < 0) // true
someOwn({x: 5, y: 0}, (value, key) => key.length === 1) // true
```

```js
let array = []
someOwn({x: 5, y: 0}, value => array.push(value)) // true
array.length // 1
```

```js
let array = []
someOwn({x: 5, y: 0}, value => array.push(value) > 10) // false
array.length // 2
```
