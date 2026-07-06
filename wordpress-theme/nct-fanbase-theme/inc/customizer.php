<?php
/**
 * Customizer settings: small, safe content hooks so site owners can tweak
 * copy without editing PHP. Everything falls back to the original design's
 * copy when left untouched.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Add Customizer settings and controls.
 *
 * @param WP_Customize_Manager $wp_customize Customizer instance.
 */
function nct_fanbase_customize_register( $wp_customize ) {
	$wp_customize->add_section(
		'nct_fanbase_content',
		array(
			'title'    => __( 'NCT Fanbase — Konten', 'nct-fanbase' ),
			'priority' => 30,
		)
	);

	// Hero kicker.
	$wp_customize->add_setting(
		'nct_hero_kicker',
		array(
			'default'           => __( 'Portal Komunitas Penggemar', 'nct-fanbase' ),
			'sanitize_callback' => 'sanitize_text_field',
		)
	);
	$wp_customize->add_control(
		'nct_hero_kicker',
		array(
			'label'   => __( 'Hero — Label Kecil', 'nct-fanbase' ),
			'section' => 'nct_fanbase_content',
			'type'    => 'text',
		)
	);

	// Hero title.
	$wp_customize->add_setting(
		'nct_hero_title',
		array(
			'default'           => __( 'NCT Fanbase', 'nct-fanbase' ),
			'sanitize_callback' => 'sanitize_text_field',
		)
	);
	$wp_customize->add_control(
		'nct_hero_title',
		array(
			'label'   => __( 'Hero — Judul', 'nct-fanbase' ),
			'section' => 'nct_fanbase_content',
			'type'    => 'text',
		)
	);

	// Hero description.
	$wp_customize->add_setting(
		'nct_hero_description',
		array(
			'default'           => __( 'Pusat informasi, berita, dan jadwal kegiatan komunitas penggemar NCT di Indonesia. Bersih, rapi, dan mudah diikuti.', 'nct-fanbase' ),
			'sanitize_callback' => 'sanitize_textarea_field',
		)
	);
	$wp_customize->add_control(
		'nct_hero_description',
		array(
			'label'   => __( 'Hero — Deskripsi', 'nct-fanbase' ),
			'section' => 'nct_fanbase_content',
			'type'    => 'textarea',
		)
	);

	// Contact email.
	$wp_customize->add_setting(
		'nct_contact_email',
		array(
			'default'           => 'kontak@nctfanbase.id',
			'sanitize_callback' => 'sanitize_email',
		)
	);
	$wp_customize->add_control(
		'nct_contact_email',
		array(
			'label'       => __( 'Email Kontak', 'nct-fanbase' ),
			'description' => __( 'Ditampilkan di halaman Contact Us.', 'nct-fanbase' ),
			'section'     => 'nct_fanbase_content',
			'type'        => 'email',
		)
	);

	// Footer copyright text.
	$wp_customize->add_setting(
		'nct_footer_text',
		array(
			/* translators: %s: current year. */
			'default'           => sprintf( __( '&copy; %s NCT Fanbase. All rights reserved.', 'nct-fanbase' ), gmdate( 'Y' ) ),
			'sanitize_callback' => 'wp_kses_post',
		)
	);
	$wp_customize->add_control(
		'nct_footer_text',
		array(
			'label'   => __( 'Teks Footer', 'nct-fanbase' ),
			'section' => 'nct_fanbase_content',
			'type'    => 'text',
		)
	);
}
add_action( 'customize_register', 'nct_fanbase_customize_register' );

/**
 * Small helper so templates don't repeat get_theme_mod() fallbacks.
 *
 * @param string $key     Theme mod key.
 * @param string $default Fallback value.
 * @return string
 */
function nct_fanbase_get_option( $key, $default ) {
	return get_theme_mod( $key, $default );
}
