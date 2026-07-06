<?php
/**
 * Widget areas.
 *
 * Both areas are registered so site owners can use them if they choose to,
 * but the default templates only render them when they actually contain
 * widgets — keeping the original clean, sidebar-free, copyright-only
 * design untouched out of the box.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register sidebar and footer widget areas.
 */
function nct_fanbase_widgets_init() {
	register_sidebar(
		array(
			'name'          => __( 'Sidebar', 'nct-fanbase' ),
			'id'            => 'sidebar-1',
			'description'   => __( 'Opsional. Tidak ditampilkan di manapun secara default agar desain asli (tanpa sidebar) tetap terjaga — aktifkan lewat child theme bila diperlukan.', 'nct-fanbase' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

	register_sidebar(
		array(
			'name'          => __( 'Footer', 'nct-fanbase' ),
			'id'            => 'footer-1',
			'description'   => __( 'Opsional. Muncul di atas baris copyright hanya jika widget ditambahkan di sini; kosong secara default sesuai desain asli.', 'nct-fanbase' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'nct_fanbase_widgets_init' );
