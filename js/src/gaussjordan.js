
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
