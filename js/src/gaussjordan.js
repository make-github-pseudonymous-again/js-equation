
var __gaussjordan__ = function ( zero, sub, mul, div ) {

	var gaussjordan = function ( A, m, n ) {

		var i, j, k, Ai, Aj, Aii, f, t;

		// for each row i
		// zero column i for all other rows
		// FIXME handle spurious zeroes

		for ( i = 0 ; i < m ; ++i ) {

			Ai = A[i];
			Aii = Ai[i];

			for ( j = 0 ; j < i ; ++j ) {

				Aj = A[j];

				f = div( Aj[i], Aii );

				Aj[i] = zero();

				for ( k = i + 1 ; k < n ; ++k ) {

					t = mul( f, Ai[k] );

					Aj[k] = sub( Aj[k], t );

				}

			}

			for ( j = i + 1 ; j < m ; ++j ) {

				Aj = A[j];

				f = div( Aj[i], Aii );

				Aj[i] = zero();

				for ( k = i + 1 ; k < n ; ++k ) {

					t = mul( f, Ai[k] );

					Aj[k] = sub( Aj[k], t );

				}

			}

		}



	};

	return gaussjordan;

};

exports.__gaussjordan__ = __gaussjordan__;
