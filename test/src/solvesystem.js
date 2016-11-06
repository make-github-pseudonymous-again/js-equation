import test from 'ava' ;

import type from "aureooms-js-type" ;
import sort from "aureooms-js-sort" ;
import array from "aureooms-js-array" ;
import matrix from "aureooms-js-matrix" ;
import { $0 , $1 , isub , mul , div , idiv , eq0 , swap } from "aureooms-js-number" ;
import * as itertools from "aureooms-js-itertools" ;
import functools from "aureooms-js-functools" ;

const alloc = matrix.__alloc__( array.alloc );
const copy = matrix.copy;

import * as equation as '../../src' ;

const normalize = equation.__normalize__( one, idiv );
const gaussjordan = equation.__gaussjordan__( iszero, zero, isub, mul, div, swap );
const satisfiable = equation.__satisfiable__( iszero );

function run ( [ [ instance, A, m, n, solution], [solvename, solve]] ) {

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


const inputs = itertools.product( [

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
	],

	[
		"instance 5, no solution",

		[
			[ 2, 1, 1, 17 ],
			[ 1, 3, 1, 16 ],
			[ 4, 7, 3, 48 ]

		],

		3, 3,

		/none/
	],

	[
		"instance 6, x = 3, y = 2, z = 1 ( induces a swap )",

		[
			[ 4, 2, 1, 17 ],
			[ 2, 1, 7, 15 ],
			[ 1, 3, 3, 12 ]

		],

		3, 3,

		[ 3, 2, 1 ]
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


], 1 ) ;

for ( const x of inputs ) run( x ) ;
