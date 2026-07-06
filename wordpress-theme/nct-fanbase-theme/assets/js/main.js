/**
 * NCT Fanbase theme — small progressive-enhancement script.
 * No build step, no dependencies. Safe to defer.
 */
( function () {
	'use strict';

	document.addEventListener( 'DOMContentLoaded', function () {
		var mobileNavDetails = document.querySelector( '.mobile-nav-details' );

		if ( ! mobileNavDetails ) {
			return;
		}

		// Close the mobile menu after a nav link is tapped.
		var links = mobileNavDetails.querySelectorAll( 'a' );
		for ( var i = 0; i < links.length; i++ ) {
			links[ i ].addEventListener( 'click', function () {
				mobileNavDetails.removeAttribute( 'open' );
			} );
		}

		// Close the mobile menu when tapping outside of it.
		document.addEventListener( 'click', function ( event ) {
			if ( mobileNavDetails.hasAttribute( 'open' ) && ! mobileNavDetails.contains( event.target ) ) {
				mobileNavDetails.removeAttribute( 'open' );
			}
		} );
	} );
} )();
