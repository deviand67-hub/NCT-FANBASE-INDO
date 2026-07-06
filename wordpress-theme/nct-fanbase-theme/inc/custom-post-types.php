<?php
/**
 * "Schedule" custom post type — powers the Schedule page.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the nct_schedule custom post type.
 */
function nct_fanbase_register_schedule_cpt() {
	$labels = array(
		'name'               => __( 'Schedule', 'nct-fanbase' ),
		'singular_name'      => __( 'Schedule Item', 'nct-fanbase' ),
		'menu_name'          => __( 'Schedule', 'nct-fanbase' ),
		'add_new'            => __( 'Add New', 'nct-fanbase' ),
		'add_new_item'       => __( 'Add New Schedule Item', 'nct-fanbase' ),
		'edit_item'          => __( 'Edit Schedule Item', 'nct-fanbase' ),
		'new_item'           => __( 'New Schedule Item', 'nct-fanbase' ),
		'view_item'          => __( 'View Schedule Item', 'nct-fanbase' ),
		'search_items'       => __( 'Search Schedule', 'nct-fanbase' ),
		'not_found'          => __( 'No schedule items found', 'nct-fanbase' ),
		'not_found_in_trash' => __( 'No schedule items found in Trash', 'nct-fanbase' ),
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'has_archive'        => 'schedule',
		'rewrite'            => array( 'slug' => 'schedule-item' ),
		'menu_icon'          => 'dashicons-calendar-alt',
		'show_in_rest'       => true,
		'supports'           => array( 'title', 'editor', 'thumbnail' ),
		'menu_position'      => 20,
		'publicly_queryable' => true,
	);

	register_post_type( 'nct_schedule', $args );
}
add_action( 'init', 'nct_fanbase_register_schedule_cpt' );

/**
 * Register the meta box used to capture event date, display label, tag,
 * and source for each schedule item.
 */
function nct_fanbase_add_schedule_meta_box() {
	add_meta_box(
		'nct_schedule_details',
		__( 'Detail Jadwal', 'nct-fanbase' ),
		'nct_fanbase_render_schedule_meta_box',
		'nct_schedule',
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes', 'nct_fanbase_add_schedule_meta_box' );

/**
 * Render the Schedule meta box fields.
 *
 * @param WP_Post $post Current post object.
 */
function nct_fanbase_render_schedule_meta_box( $post ) {
	wp_nonce_field( 'nct_fanbase_save_schedule', 'nct_fanbase_schedule_nonce' );

	$event_date    = get_post_meta( $post->ID, '_nct_event_date', true );
	$display_date  = get_post_meta( $post->ID, '_nct_display_date', true );
	$tag           = get_post_meta( $post->ID, '_nct_tag', true );
	$source        = get_post_meta( $post->ID, '_nct_source', true );

	echo '<div class="nct-schedule-meta-box">';

	echo '<p><label for="nct_event_date">' . esc_html__( 'Tanggal Kejadian (untuk pengurutan)', 'nct-fanbase' ) . '</label>';
	echo '<input type="date" id="nct_event_date" name="nct_event_date" value="' . esc_attr( $event_date ) . '" /></p>';

	echo '<p><label for="nct_display_date">' . esc_html__( 'Tampilan Tanggal (opsional)', 'nct-fanbase' ) . '</label>';
	echo '<input type="text" id="nct_display_date" name="nct_display_date" value="' . esc_attr( $display_date ) . '" placeholder="' . esc_attr__( 'contoh: 13-14 Juni 2026, atau Kuartal III 2026', 'nct-fanbase' ) . '" />';
	echo '<span class="description">' . esc_html__( 'Jika diisi, teks ini ditampilkan menggantikan tanggal di atas.', 'nct-fanbase' ) . '</span></p>';

	echo '<p><label for="nct_tag">' . esc_html__( 'Tag (contoh: Fan Meeting, Comeback, Anniversary)', 'nct-fanbase' ) . '</label>';
	echo '<input type="text" id="nct_tag" name="nct_tag" value="' . esc_attr( $tag ) . '" /></p>';

	echo '<p><label for="nct_source">' . esc_html__( 'Sumber (opsional)', 'nct-fanbase' ) . '</label>';
	echo '<input type="text" id="nct_source" name="nct_source" value="' . esc_attr( $source ) . '" placeholder="' . esc_attr__( 'contoh: Soompi, allkpop', 'nct-fanbase' ) . '" /></p>';

	echo '</div>';
}

/**
 * Persist the Schedule meta box fields.
 *
 * @param int $post_id Post ID being saved.
 */
function nct_fanbase_save_schedule_meta( $post_id ) {
	if ( ! isset( $_POST['nct_fanbase_schedule_nonce'] ) ) {
		return;
	}

	if ( ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nct_fanbase_schedule_nonce'] ) ), 'nct_fanbase_save_schedule' ) ) {
		return;
	}

	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	if ( isset( $_POST['post_type'] ) && 'nct_schedule' === $_POST['post_type'] ) {
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}
	} else {
		return;
	}

	if ( isset( $_POST['nct_event_date'] ) ) {
		update_post_meta( $post_id, '_nct_event_date', sanitize_text_field( wp_unslash( $_POST['nct_event_date'] ) ) );
	}

	if ( isset( $_POST['nct_display_date'] ) ) {
		update_post_meta( $post_id, '_nct_display_date', sanitize_text_field( wp_unslash( $_POST['nct_display_date'] ) ) );
	}

	if ( isset( $_POST['nct_tag'] ) ) {
		update_post_meta( $post_id, '_nct_tag', sanitize_text_field( wp_unslash( $_POST['nct_tag'] ) ) );
	}

	if ( isset( $_POST['nct_source'] ) ) {
		update_post_meta( $post_id, '_nct_source', sanitize_text_field( wp_unslash( $_POST['nct_source'] ) ) );
	}
}
add_action( 'save_post', 'nct_fanbase_save_schedule_meta' );

/**
 * Order the Schedule archive by event date (ascending) rather than
 * publish date.
 *
 * @param WP_Query $query Main query.
 */
function nct_fanbase_schedule_query_order( $query ) {
	if ( is_admin() || ! $query->is_main_query() ) {
		return;
	}

	if ( $query->is_post_type_archive( 'nct_schedule' ) ) {
		$query->set( 'meta_key', '_nct_event_date' );
		$query->set( 'orderby', 'meta_value' );
		$query->set( 'order', 'ASC' );
		$query->set( 'posts_per_page', -1 );
	}
}
add_action( 'pre_get_posts', 'nct_fanbase_schedule_query_order' );
