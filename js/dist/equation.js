(function(exports, undefined){

	'use strict';


/* js/src/gaussjordan.js */

var __gaussjordan__ = function ( iszero, zero, isub, mul, div, swap ) {


	/**
	 * A is a m * (n + 1) matrix.
	 * Column n is the independent term column.
	 *
	 * @param  {matrix} A equations system
	 * @param  {const length} m number of equations
	 * @param  {const length} n number of variables
	 */
	var gaussjordan = function ( A, m, n ) {

		var r, c, j, k, Ar, Aj, f, t, iterations, rank, pivot;

		// for each row r
		// zero column c for all other rows
		// the pivot used is A[r][c]

		// If at the end of the procedure a line is composed
		// of zeroes except for the independent term
		// then the system is not solvable. The index of such
		// a line is at least the rank of the matrix

		iterations = Math.min( m, n );

		r = 0;

		columns : for ( c = 0 ; c < iterations ; ++c ) {

			Ar = A[r];
			pivot = Ar[c];

			// if we have a zero in A[r][c]
			// we need to swap row r with row
			// j such that A[j][c] is not zero
			// if this is not possible then we
			// decrease the rank of the matrix
			// and continue with the next
			// column

			if ( iszero( pivot ) ) {

				j = r;

				do {

					++j;

					if ( j === m ) {
						continue columns;
					}

				} while ( iszero( A[j][c] ) );

				swap( A, r, j );

				Ar = A[r];
				pivot = Ar[c];

			}

			for ( j = 0 ; j < r ; ++j ) {

				Aj = A[j];

				f = div( Aj[c], pivot );

				Aj[c] = zero();

				for ( k = c + 1 ; k <= n ; ++k ) {

					t = mul( f, Ar[k] );

					Aj[k] = isub( Aj[k], t );

				}

			}

			for ( j = r + 1 ; j < m ; ++j ) {

				Aj = A[j];

				f = div( Aj[c], pivot );

				Aj[c] = zero();

				for ( k = c + 1 ; k <= n ; ++k ) {

					t = mul( f, Ar[k] );

					Aj[k] = isub( Aj[k], t );

				}

			}

			++r;

		}

		return r;

	};

	return gaussjordan;

};

exports.__gaussjordan__ = __gaussjordan__;

/* js/src/normalize.js */



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

			for ( j = i + 1 ; j <= n ; ++j ) {

				Ai[j] = idiv( Ai[j], Aii );

			}

		}

	};

	return normalize;

};

exports.__normalize__ = __normalize__;

/* js/src/satisfiable.js */


var __satisfiable__ = function ( iszero ) {


	/**
	 * Returns m if A is satisfiable. Otherwise
	 * returns the index of the first invalid
	 * row.
	 */

	var satisfiable = function ( A, m, n, rank ) {

		var i;

		for ( i = rank ; i < m ; ++i ) {

			if ( !iszero( A[i][n] ) ) {
				break;
			}

		}

		return i;


	};

	return satisfiable;

};

exports.__satisfiable__ = __satisfiable__;

})(typeof exports === 'undefined' ? this['equation'] = {} : exports);
