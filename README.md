# karma-calling
Test function parameters and errors in BDD-style assertions

Based on http://stackoverflow.com/a/34590246


## Installation

1\. Install the plugin from npm:

```sh
$ npm install karma-calling --save-dev
```

2\. Add `calling` to the `frameworks` array in your Karma configuration:

```javascript
module.exports = function(config){
  config.set({
    // ...
    frameworks: ['mocha', 'calling'],
    // ...
```
---
If you are not using Karma, you can still use `calling` with import or require:

```javascript
import calling from 'karma-calling';
```

```javascript
var calling = require('karma-calling');
```

Or just by inserting the script in your page:

```javascript
<script src='karma-calling.js'></script>
```


## Usage

Instead of wrapping your functions in an anonymous function, use a more natural BDD-style chaining:

### Expect

```javascript
  // Instead of
  expect(function () { myFunction.apply(myObject, [param1, param2]); }).to.throw(Error);
  
  // You can use
  expect(calling(myFunction).on(myObject).with(param1, param2)).to.throw(Error);
```

### Should
```javascript
  // Instead of
  function () { myFunction.apply(myObject, [param1, param2]); }.should.throw(Error);
  
  // You can use
  calling(myFunction).on(myObject).with(param1, param2).should.throw(Error);
```

> You can swap the order of `on` and `with` according to your preference.


## API

### calling(function)

The function/method to call.

### .on(context)

Optional binding context.

### .with(param1, ..., paramN)

Optional parameters.



## License

MIT License



