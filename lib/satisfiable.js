"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__satisfiable__ = __satisfiable__;
function __satisfiable__(iszero) {

	/**
  * Returns m if A is satisfiable. Otherwise
  * returns the index of the first invalid
  * row.
  */

	var satisfiable = function satisfiable(A, m, n, rank) {

		var i;

		for (i = rank; i < m; ++i) {

			if (!iszero(A[i][n])) {
				break;
			}
		}

		return i;
	};

	return satisfiable;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXRpc2ZpYWJsZS5qcyJdLCJuYW1lcyI6WyJfX3NhdGlzZmlhYmxlX18iLCJpc3plcm8iLCJzYXRpc2ZpYWJsZSIsIkEiLCJtIiwibiIsInJhbmsiLCJpIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsZSxHQUFBQSxlO0FBQVQsU0FBU0EsZUFBVCxDQUEyQkMsTUFBM0IsRUFBb0M7O0FBRzFDOzs7Ozs7QUFNQSxLQUFJQyxjQUFjLFNBQWRBLFdBQWMsQ0FBV0MsQ0FBWCxFQUFjQyxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQkMsSUFBcEIsRUFBMkI7O0FBRTVDLE1BQUlDLENBQUo7O0FBRUEsT0FBTUEsSUFBSUQsSUFBVixFQUFpQkMsSUFBSUgsQ0FBckIsRUFBeUIsRUFBRUcsQ0FBM0IsRUFBK0I7O0FBRTlCLE9BQUssQ0FBQ04sT0FBUUUsRUFBRUksQ0FBRixFQUFLRixDQUFMLENBQVIsQ0FBTixFQUEwQjtBQUN6QjtBQUNBO0FBRUQ7O0FBRUQsU0FBT0UsQ0FBUDtBQUdBLEVBZkQ7O0FBaUJBLFFBQU9MLFdBQVA7QUFFQSIsImZpbGUiOiJzYXRpc2ZpYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZnVuY3Rpb24gX19zYXRpc2ZpYWJsZV9fICggaXN6ZXJvICkge1xuXG5cblx0LyoqXG5cdCAqIFJldHVybnMgbSBpZiBBIGlzIHNhdGlzZmlhYmxlLiBPdGhlcndpc2Vcblx0ICogcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGludmFsaWRcblx0ICogcm93LlxuXHQgKi9cblxuXHR2YXIgc2F0aXNmaWFibGUgPSBmdW5jdGlvbiAoIEEsIG0sIG4sIHJhbmsgKSB7XG5cblx0XHR2YXIgaTtcblxuXHRcdGZvciAoIGkgPSByYW5rIDsgaSA8IG0gOyArK2kgKSB7XG5cblx0XHRcdGlmICggIWlzemVybyggQVtpXVtuXSApICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBpO1xuXG5cblx0fTtcblxuXHRyZXR1cm4gc2F0aXNmaWFibGU7XG5cbn1cbiJdfQ==