import test from 'ava';
import sinon from 'sinon';
import calling from './karma-calling';

const myFunction = sinon.spy();
const myObject = {};
const myArguments = ['vanília', 'karamell', 'tuttifrutti', 'rumosdió', 'kávé'];

test.afterEach(t => myFunction.reset());

test('it should provide a global function', t => {
	t.is(typeof calling, 'function');
});

test('"calling" should have an "on" method', t => {
	var proxy = calling(myFunction);
	t.is(typeof proxy.on, 'function');
});

test('"calling" should have a "with" method', t => {
	var proxy = calling(myFunction);
	t.is(typeof proxy.with, 'function');
});

test('the methods should be chainable', t => {
	t.notThrows(function () {
		calling(myFunction).with().on();
	});
	t.notThrows(function () {
		calling(myFunction).on().with();
	});
});

test('"calling" should call the function', t => {
	calling(myFunction)();
	t.true(myFunction.called);
});

test('"calling" should not set the context', t => {
	calling(myFunction)();
	t.true(myFunction.calledOn(undefined));
});

test('"on" without arguments should not set the context', t => {
	calling(myFunction)();
	t.true(myFunction.calledOn(undefined));
});

test('"with" should not set the context', t => {
	calling(myFunction).with(...myArguments)();
	t.true(myFunction.calledOn(undefined));
});

test('"on" should set the context', t => {
	calling(myFunction).on(myObject)();
	t.true(myFunction.calledOn(myObject));
});

test('"calling" should not set arguments', t => {
	calling(myFunction)();
	t.true(myFunction.calledWithExactly());
});

test('"with" without arguments should not set arguments', t => {
	calling(myFunction).with()();
	t.true(myFunction.calledWithExactly());
});

test('"on" should not set arguments', t => {
	calling(myFunction).on(myObject)();
	t.true(myFunction.calledWithExactly());
});

test('"with" should set arguments', t => {
	calling(myFunction).with(...myArguments)();
	t.true(myFunction.calledWithExactly(...myArguments));
});

test('chaining order should not matter', t => {
	calling(myFunction).on(myObject).with(...myArguments)();
	calling(myFunction).with(...myArguments).on(myObject)();
	t.is(myFunction.firstCall.thisValue, myFunction.secondCall.thisValue);
	t.deepEqual(myFunction.firstCall.args, myFunction.secondCall.args);
});