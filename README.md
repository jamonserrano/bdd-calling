# karma-calling
Test function parameters and errors in BDD-style assertions

Based on http://stackoverflow.com/a/34590246


## Installation

Install the plugin from npm:

```sh
$ npm install karma-calling --save-dev
```

Add `calling` to the `frameworks` array in your Karma configuration:

```javascript
module.exports = function(config){
  config.set({
    // ...
    frameworks: ['mocha', 'calling'],
    // ...
```
You can also use karma-calling in the browser:

```javascript
<script src="karma-calling.js"></script>
```


## Usage

Instead of wrapping your functions in a lambda, you can use more natural BDD-style chaining:

### Expect

```javascript
  // Instead of
  expect(function () { myFunction.apply(myObject, [param1, param2]); }).to.throw();
  
  // You can use
  expect(calling(myFunction).on(myObject).with(param1, param2)).to.throw();
```

### Should
```javascript
  // Instead of
  function () { myFunction.apply(myObject, [param1, param2]); }.should.throw();
  
  // You can use
  calling(myFunction).on(myObject).with(param1, param2).should.throw();
```

> If you prefer you can swap the order of `on` and `with`, it doesn't matter.


## API

### calling(function)

The function/method to call.

### .on(context)

Optional binding context.

### .with(param1, ..., paramN)

Optional parameters.



## License

MIT License



