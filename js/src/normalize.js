


var __normalize__ = function ( one, idiv ) {


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
	var normalize = function ( A, m, n ) {

		var i, j, Ai, Aj, Aii;

		for ( i = 0 ; i < m ; ++i ) {

			Ai = A[i];
			Aii = Ai[i];
			
			Ai[i] = one();

			for ( j = i + 1 ; j < n ; ++j ) {

				Ai[j] = idiv( Ai[j], Aii );

			}

		}

	};

	return normalize;

};

exports.__normalize__ = __normalize__;
