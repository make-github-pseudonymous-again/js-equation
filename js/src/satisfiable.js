

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
