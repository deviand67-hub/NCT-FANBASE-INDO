<?php
/**
 * Core theme setup: supports, menus, sensible defaults.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nct_fanbase_setup' ) ) {

	/**
	 * Register theme support and navigation menus.
	 */
	function nct_fanbase_setup() {
		// Translation ready.
		load_theme_textdomain( 'nct-fanbase', NCT_FANBASE_DIR . '/languages' );

		// Let WordPress manage the document <title>.
		add_theme_support( 'title-tag' );

		// Featured images.
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1200, 630, true );
		add_image_size( 'nct-card', 800, 450, true );
		add_image_size( 'nct-card-featured', 1200, 630, true );

		// HTML5 markup for core templates.
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
				'navigation-widgets',
			)
		);

		// Custom logo (Appearance -> Customize -> Site Identity).
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 64,
				'width'       => 64,
				'flex-height' => true,
				'flex-width'  => true,
			)
		);

		// Custom background (Appearance -> Customize -> Background Image).
		add_theme_support(
			'custom-background',
			array(
				'default-color' => 'ffffff',
			)
		);

		// Custom header is registered separately below so we can set sane defaults.
		add_theme_support(
			'custom-header',
			array(
				'width'       => 1600,
				'height'      => 400,
				'flex-width'  => true,
				'flex-height' => true,
				'header-text' => false,
			)
		);

		// Feed links.
		add_theme_support( 'automatic-feed-links' );

		// Selective refresh for widgets in the Customizer.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Responsive embeds.
		add_theme_support( 'responsive-embeds' );

		// This theme uses a fixed two-tone brand palette; expose it to the
		// block editor / Customizer color pickers for consistency.
		add_theme_support(
			'editor-color-palette',
			array(
				array(
					'name'  => __( 'Brand Green', 'nct-fanbase' ),
					'slug'  => 'brand-green',
					'color' => '#0f5c37',
				),
				array(
					'name'  => __( 'Brand Green Light', 'nct-fanbase' ),
					'slug'  => 'brand-green-light',
					'color' => '#e3f3e9',
				),
				array(
					'name'  => __( 'White', 'nct-fanbase' ),
					'slug'  => 'white',
					'color' => '#ffffff',
				),
				array(
					'name'  => __( 'Neutral', 'nct-fanbase' ),
					'slug'  => 'neutral',
					'color' => '#404040',
				),
			)
		);

		// Navigation menus.
		register_nav_menus(
			array(
				'primary' => __( 'Primary Menu', 'nct-fanbase' ),
				'footer'  => __( 'Footer Menu', 'nct-fanbase' ),
			)
		);
	}
}
add_action( 'after_setup_theme', 'nct_fanbase_setup' );

/**
 * Set the $content_width global, used by media embeds.
 */
function nct_fanbase_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'nct_fanbase_content_width', 768 );
}
add_action( 'after_setup_theme', 'nct_fanbase_content_width', 0 );

/**
 * Register the default "Uncategorized"-style News categories on theme
 * activation so a fresh install already has the taxonomy terms used by
 * the design (Pengumuman, Berita, Update Jadwal, Komunitas).
 */
function nct_fanbase_register_default_categories() {
	$defaults = array( 'Pengumuman', 'Berita', 'Update Jadwal', 'Komunitas' );

	foreach ( $defaults as $name ) {
		if ( ! term_exists( $name, 'category' ) ) {
			wp_insert_term( $name, 'category' );
		}
	}
}
add_action( 'after_switch_theme', 'nct_fanbase_register_default_categories' );

/**
 * Give search a slightly friendlier, always-present placeholder.
 *
 * @param string $form Default search form markup.
 * @return string
 */
function nct_fanbase_search_form( $form ) {
	unset( $form );

	$unique_id = esc_attr( uniqid( 'search-form-' ) );

	return '<form role="search" method="get" class="search-form" action="' . esc_url( home_url( '/' ) ) . '">'
		. '<label for="' . $unique_id . '" class="screen-reader-text">' . esc_html__( 'Cari', 'nct-fanbase' ) . '</label>'
		. '<input type="search" id="' . $unique_id . '" class="search-form__field" placeholder="' . esc_attr__( 'Cari berita NCT…', 'nct-fanbase' ) . '" value="' . get_search_query() . '" name="s" />'
		. '<button type="submit" class="btn btn-primary">' . esc_html__( 'Cari', 'nct-fanbase' ) . '</button>'
		. '</form>';
}
add_filter( 'get_search_form', 'nct_fanbase_search_form' );

/**
 * Trim automatic excerpts and keep the "[...]" suffix simple.
 *
 * @return string
 */
function nct_fanbase_excerpt_more() {
	return '&hellip;';
}
add_filter( 'excerpt_more', 'nct_fanbase_excerpt_more' );

/**
 * Excerpt length in words, matching the original card design (roughly
 * two lines of text).
 *
 * @return int
 */
function nct_fanbase_excerpt_length() {
	return 24;
}
add_filter( 'excerpt_length', 'nct_fanbase_excerpt_length' );
