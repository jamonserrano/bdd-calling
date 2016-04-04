(function () {
    var calling = function (func) {
        var ctx = arguments[1] || null;
        return {
            on: function (context) {
                return calling(func, context);
            },
            with: function () {
                var args = Array.prototype.slice.call(arguments);
                return function () {
                    func.apply(ctx, args);
                };
            }
        };
    };

    if (typeof exports === "object" && typeof module === "object") {
        module.exports = calling;
    } else if (typeof define === "function" && define.amd) {
        define("calling", [], function () {
            return calling;
        });
    } else {
        this["calling"] = calling;
    }
}).call(this);
