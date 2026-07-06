<?php
/**
 * Reusable template helpers.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * All demo content ships as fully-formed HTML (matching the theme's own
 * CSS classes), so we turn off the automatic paragraph filter on post/page
 * content to avoid it mangling hand-written markup. Comments are
 * unaffected — they use their own 'comment_text' filter.
 */
remove_filter( 'the_content', 'wpautop' );

/**
 * Re-apply wpautop only for plain-text content that contains no block-level
 * HTML tags yet, so simple posts typed straight into the block editor still
 * get paragraphs.
 *
 * @param string $content Post content.
 * @return string
 */
function nct_fanbase_maybe_autop( $content ) {
	if ( false === strpos( $content, '<p' ) && false === strpos( $content, '<div' ) && false === strpos( $content, '<h2' ) ) {
		return wpautop( $content );
	}

	return $content;
}
add_filter( 'the_content', 'nct_fanbase_maybe_autop', 5 );

/**
 * Map a category name to its badge modifier class, matching the original
 * design where "Pengumuman" gets a solid brand-green pill and every other
 * category gets the light pill.
 *
 * @param string $category_name Category display name.
 * @return string
 */
function nct_fanbase_category_badge_class( $category_name ) {
	if ( 0 === strcasecmp( $category_name, 'Pengumuman' ) ) {
		return 'category-badge category-badge--pengumuman';
	}

	return 'category-badge';
}

/**
 * Output the primary category badge for the current post in the loop.
 */
function nct_fanbase_the_category_badge() {
	$categories = get_the_category();

	if ( empty( $categories ) ) {
		return;
	}

	$category = $categories[0];

	echo '<span class="' . esc_attr( nct_fanbase_category_badge_class( $category->name ) ) . '">' . esc_html( $category->name ) . '</span>';
}

/**
 * Breadcrumb trail: Home / Section / Current.
 */
function nct_fanbase_breadcrumb() {
	$items = array();

	$items[] = array(
		'label' => __( 'Home', 'nct-fanbase' ),
		'url'   => home_url( '/' ),
	);

	if ( is_singular( 'post' ) ) {
		$items[] = array(
			'label' => __( 'News', 'nct-fanbase' ),
			'url'   => get_post_type_archive_link( 'post' ),
		);
		$items[] = array(
			'label' => get_the_title(),
			'url'   => '',
		);
	} elseif ( is_singular( 'nct_schedule' ) ) {
		$items[] = array(
			'label' => __( 'Schedule', 'nct-fanbase' ),
			'url'   => get_post_type_archive_link( 'nct_schedule' ),
		);
		$items[] = array(
			'label' => get_the_title(),
			'url'   => '',
		);
	} elseif ( is_category() || is_tag() ) {
		$items[] = array(
			'label' => __( 'News', 'nct-fanbase' ),
			'url'   => '',
		);
		$items[] = array(
			'label' => single_cat_title( '', false ) ? single_cat_title( '', false ) : single_tag_title( '', false ),
			'url'   => '',
		);
	} elseif ( is_page() ) {
		$items[] = array(
			'label' => get_the_title(),
			'url'   => '',
		);
	} elseif ( is_search() ) {
		$items[] = array(
			/* translators: %s: search term. */
			'label' => sprintf( __( 'Hasil pencarian: %s', 'nct-fanbase' ), get_search_query() ),
			'url'   => '',
		);
	}

	if ( count( $items ) < 2 ) {
		return;
	}

	echo '<nav class="breadcrumb" aria-label="' . esc_attr__( 'Breadcrumb', 'nct-fanbase' ) . '"><ol>';

	$last_index = count( $items ) - 1;

	foreach ( $items as $index => $item ) {
		echo '<li>';

		if ( ! empty( $item['url'] ) && $index !== $last_index ) {
			echo '<a href="' . esc_url( $item['url'] ) . '">' . esc_html( $item['label'] ) . '</a>';
		} else {
			echo '<span aria-current="page">' . esc_html( $item['label'] ) . '</span>';
		}

		echo '</li>';

		if ( $index !== $last_index ) {
			echo '<li aria-hidden="true"> / </li>';
		}
	}

	echo '</ol></nav>';
}

/**
 * Format a schedule item's date for display, preferring the manual
 * "display date" override when present.
 *
 * @param int $post_id Schedule post ID.
 * @return string
 */
function nct_fanbase_get_schedule_display_date( $post_id ) {
	$display_date = get_post_meta( $post_id, '_nct_display_date', true );

	if ( ! empty( $display_date ) ) {
		return $display_date;
	}

	$event_date = get_post_meta( $post_id, '_nct_event_date', true );

	if ( empty( $event_date ) ) {
		return get_the_date( '', $post_id );
	}

	$timestamp = strtotime( $event_date );

	if ( ! $timestamp ) {
		return $event_date;
	}

	return date_i18n( 'd F Y', $timestamp );
}

/**
 * Whether the current post has any of the "next" (future or today)
 * schedule items — used on the front page preview.
 *
 * @param int $limit Maximum items to return.
 * @return WP_Query
 */
function nct_fanbase_get_next_schedule( $limit ) {
	$args = array(
		'post_type'      => 'nct_schedule',
		'posts_per_page' => $limit,
		'meta_key'       => '_nct_event_date',
		'orderby'        => 'meta_value',
		'order'          => 'ASC',
		'meta_query'     => array(
			array(
				'key'     => '_nct_event_date',
				'value'   => current_time( 'Y-m-d' ),
				'compare' => '>=',
				'type'    => 'DATE',
			),
		),
	);

	return new WP_Query( $args );
}

/**
 * [nct_contact_email] shortcode — outputs the Customizer-configured
 * contact email as a mailto link, so the Contact Us page content stays
 * editable from Appearance > Customize without touching the Page itself.
 *
 * @return string
 */
function nct_fanbase_contact_email_shortcode() {
	$email = nct_fanbase_get_option( 'nct_contact_email', 'kontak@nctfanbase.id' );

	return '<a href="' . esc_url( 'mailto:' . antispambot( $email ) ) . '">' . antispambot( esc_html( $email ) ) . '</a>';
}
add_shortcode( 'nct_contact_email', 'nct_fanbase_contact_email_shortcode' );

/**
 * Pagination wrapper around the_posts_pagination() with theme classes.
 */
function nct_fanbase_pagination() {
	the_posts_pagination(
		array(
			'mid_size'  => 1,
			'prev_text' => __( '&larr; Sebelumnya', 'nct-fanbase' ),
			'next_text' => __( 'Selanjutnya &rarr;', 'nct-fanbase' ),
			'class'     => 'pagination',
		)
	);
}
