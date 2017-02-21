"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__normalize__ = __normalize__;
function __normalize__(one, idiv) {

	/**
  * Set coefficients in the diagonal of A to 1.
  * A is in upper triangular form
  *
  *     | a ...........
  *     | 0 b .........
  *     | 0 0 c .......
  *     | 0 0 0 d .....
  *     | 0 0 0 0 e ...
  *     | .............
  *
  * @param  {matrix} A
  * @param  {const length} m number of rows
  * @param  {const length} n number of columns
  */
	var normalize = function normalize(A, m, n) {

		var i, j, Ai, Aj, Aii;

		for (i = 0; i < m; ++i) {

			Ai = A[i];
			Aii = Ai[i];

			Ai[i] = one();

			for (j = i + 1; j <= n; ++j) {

				Ai[j] = idiv(Ai[j], Aii);
			}
		}
	};

	return normalize;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiX19ub3JtYWxpemVfXyIsIm9uZSIsImlkaXYiLCJub3JtYWxpemUiLCJBIiwibSIsIm4iLCJpIiwiaiIsIkFpIiwiQWoiLCJBaWkiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWlCQSxhLEdBQUFBLGE7QUFBVCxTQUFTQSxhQUFULENBQXlCQyxHQUF6QixFQUE4QkMsSUFBOUIsRUFBcUM7O0FBRzVDOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxLQUFJQyxZQUFZLFNBQVpBLFNBQVksQ0FBV0MsQ0FBWCxFQUFjQyxDQUFkLEVBQWlCQyxDQUFqQixFQUFxQjs7QUFFcEMsTUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsR0FBbEI7O0FBRUEsT0FBTUosSUFBSSxDQUFWLEVBQWNBLElBQUlGLENBQWxCLEVBQXNCLEVBQUVFLENBQXhCLEVBQTRCOztBQUUzQkUsUUFBS0wsRUFBRUcsQ0FBRixDQUFMO0FBQ0FJLFNBQU1GLEdBQUdGLENBQUgsQ0FBTjs7QUFFQUUsTUFBR0YsQ0FBSCxJQUFRTixLQUFSOztBQUVBLFFBQU1PLElBQUlELElBQUksQ0FBZCxFQUFrQkMsS0FBS0YsQ0FBdkIsRUFBMkIsRUFBRUUsQ0FBN0IsRUFBaUM7O0FBRWhDQyxPQUFHRCxDQUFILElBQVFOLEtBQU1PLEdBQUdELENBQUgsQ0FBTixFQUFhRyxHQUFiLENBQVI7QUFFQTtBQUVEO0FBRUQsRUFuQkQ7O0FBcUJBLFFBQU9SLFNBQVA7QUFFQSIsImZpbGUiOiJub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX25vcm1hbGl6ZV9fICggb25lLCBpZGl2ICkge1xuXG5cblx0LyoqXG5cdCAqIFNldCBjb2VmZmljaWVudHMgaW4gdGhlIGRpYWdvbmFsIG9mIEEgdG8gMS5cblx0ICogQSBpcyBpbiB1cHBlciB0cmlhbmd1bGFyIGZvcm1cblx0ICpcblx0ICogICAgIHwgYSAuLi4uLi4uLi4uLlxuXHQgKiAgICAgfCAwIGIgLi4uLi4uLi4uXG5cdCAqICAgICB8IDAgMCBjIC4uLi4uLi5cblx0ICogICAgIHwgMCAwIDAgZCAuLi4uLlxuXHQgKiAgICAgfCAwIDAgMCAwIGUgLi4uXG5cdCAqICAgICB8IC4uLi4uLi4uLi4uLi5cblx0ICpcblx0ICogQHBhcmFtICB7bWF0cml4fSBBXG5cdCAqIEBwYXJhbSAge2NvbnN0IGxlbmd0aH0gbSBudW1iZXIgb2Ygcm93c1xuXHQgKiBAcGFyYW0gIHtjb25zdCBsZW5ndGh9IG4gbnVtYmVyIG9mIGNvbHVtbnNcblx0ICovXG5cdHZhciBub3JtYWxpemUgPSBmdW5jdGlvbiAoIEEsIG0sIG4gKSB7XG5cblx0XHR2YXIgaSwgaiwgQWksIEFqLCBBaWk7XG5cblx0XHRmb3IgKCBpID0gMCA7IGkgPCBtIDsgKytpICkge1xuXG5cdFx0XHRBaSA9IEFbaV07XG5cdFx0XHRBaWkgPSBBaVtpXTtcblxuXHRcdFx0QWlbaV0gPSBvbmUoKTtcblxuXHRcdFx0Zm9yICggaiA9IGkgKyAxIDsgaiA8PSBuIDsgKytqICkge1xuXG5cdFx0XHRcdEFpW2pdID0gaWRpdiggQWlbal0sIEFpaSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fTtcblxuXHRyZXR1cm4gbm9ybWFsaXplO1xuXG59XG4iXX0=