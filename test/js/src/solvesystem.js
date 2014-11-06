
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

	test( solvename + " # " + instance , function () {

		var B, S, throwing;

		B = alloc( m, n + 1 );

		copy( A, 0, m, 0, n + 1, B, 0, 0 );

		if ( type.isarray( solution ) ) {

			solve( B, m, n );

			S = [ array.alloc( m ) ];

			matrix.transpose( B, 0, m, n, n + 1, S, 0, 0 );

			deepEqual( S[0], solution, "compare solutions" );

		}

		else {

			throwing = functools.partial( solve, [B, m, n] );

			throws( throwing, solution, "should throw" );

		}



	} );

};


itertools.product( [

// instances

[

	[
		"instance 1, x = 7",

		[
			[ 2, 14 ]
		],

		1, 1,

		[ 7 ]
	],

	[
		"instance 2, x = 7, y = 3",

		[
			[ 2, 1, 17 ],
			[ 1, 3, 16 ]
		],

		2, 2,

		[ 7, 3 ]
	],

	[
		"instance 3, x = 7, y = 3, z = -5",

		[
			[ 2, 1, 0, 17 ],
			[ 1, 3, 0, 16 ],
			[ 1, 3, 3,  1 ]

		],

		3, 3,

		[ 7, 3, -5 ]
	],

	[
		"instance 4, infinite number of solutions",

		[
			[ 2, 1, 1, 17 ],
			[ 1, 3, 1, 16 ],
			[ 4, 7, 3, 49 ]

		],

		3, 3,

		/infinite/
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

				if ( satisfiable( A, m, n, rank ) === m ) {
					throw new Error( "infinite" );
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
