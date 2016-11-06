

export function __satisfiable__ ( iszero ) {


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

}
