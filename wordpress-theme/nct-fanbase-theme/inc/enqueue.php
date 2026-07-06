<?php
/**
 * Styles and scripts.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue theme styles and scripts on the front end.
 */
function nct_fanbase_scripts() {
	// Required stylesheet header (kept intentionally minimal; see style.css).
	wp_enqueue_style( 'nct-fanbase-style', get_stylesheet_uri(), array(), NCT_FANBASE_VERSION );

	// Real design system lives here.
	wp_enqueue_style( 'nct-fanbase-main', NCT_FANBASE_URI . '/assets/css/main.css', array( 'nct-fanbase-style' ), NCT_FANBASE_VERSION );

	// Small progressive-enhancement script for the mobile menu.
	wp_enqueue_script( 'nct-fanbase-main', NCT_FANBASE_URI . '/assets/js/main.js', array(), NCT_FANBASE_VERSION, true );

	if ( is_singular() && comments_open() ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'nct_fanbase_scripts' );

/**
 * Enqueue admin-only styles for the Schedule meta box.
 *
 * @param string $hook Current admin page hook.
 */
function nct_fanbase_admin_scripts( $hook ) {
	unset( $hook );

	$screen = get_current_screen();

	if ( $screen && 'nct_schedule' === $screen->post_type ) {
		wp_enqueue_style( 'nct-fanbase-admin', NCT_FANBASE_URI . '/assets/css/admin.css', array(), NCT_FANBASE_VERSION );
	}
}
add_action( 'admin_enqueue_scripts', 'nct_fanbase_admin_scripts' );
