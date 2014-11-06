
var run, type, array, matrix, number, itertools, functools,
    one, zero, isub, mul, div, idiv, iszero, swap,
    alloc, copy,
	normalize, gaussjordan, satisfiable;

type = require( "aureooms-js-type" );
array = require( "aureooms-js-array" );
matrix = require( "aureooms-js-matrix" );
number = require( "aureooms-js-number" );
itertools = require( "aureooms-js-itertools" );
functools = require( "aureooms-js-functools" );

one = number.one;
zero = number.zero;
isub = number.isub;
mul = number.mul;
div = number.div;
idiv = number.idiv;
iszero = number.iszero;
swap = array.swap;

alloc = matrix.__alloc__( array.alloc );
copy = matrix.copy;

normalize = equation.__normalize__( one, idiv );
gaussjordan = equation.__gaussjordan__( iszero, zero, isub, mul, div, swap );
satisfiable = equation.__satisfiable__( iszero );

run = function ( instance, A, m, n, solution, solvename, solve ) {

	test( solvename, " # " + instance , function () {

		var B, S;

		B = alloc( m, n + 1 );

		copy( A, 0, m, 0, n + 1, B, 0, 0 );

		if ( type.isarray( solution ) ) {

			solve( B, m, n );

			S = [ array.alloc( m ) ];

			matrix.transpose( B, 0, m, n, n + 1, S, 0, 0 );

			deepEquals( S[0], solution, "compare solutions" );

		}
		else {

			throws( solve( B, m, n ), solution, "should throw" );

		}



	} );

};


itertools.product( [

// instances

[
	[
		"instance 0, x = 7",

		[
			[ 2, 14 ]
		],

		1, 1,

		[]
	]
],

// algorithms

[

	[

		"Gauss-Jordan Algorithm",

		function ( A, m, n ) {

			var i, rank;

			rank = gaussjordan( A, m, n );

			if ( rank < m ) {

				if ( satisfiable( A, m, n, rank ) ) {
					throw new Error( "multiple" );
				}

				else {
					throw new Error( "none" );
				}

			}

			normalize( A, m, n );

		}

	]
]


], 1, [] ).forEach( functools.partial( functools.star, [run] ) );
