(function () {
	function calling(target, ctx, args) {
		// proxy function
		var proxy = function () {
			target.apply(ctx, args);
		};

		// apply new context, keep arguments
		proxy.on = function (context) {
			return calling(target, context, args);
		};

		// apply new arguments, keep context
		proxy.with = function () {
			return calling(target, ctx, Array.prototype.slice.call(arguments));
		};

		return proxy;
	}

	if (typeof exports === 'object' && typeof module === 'object') {
		module.exports = calling;
	} else if (typeof define === 'function' && define.amd) {
		define('calling', [], function () {
			return calling;
		});
	} else {
		this.calling = calling;
	}
}).call(this);
