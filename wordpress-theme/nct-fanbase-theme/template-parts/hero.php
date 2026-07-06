<?php
/**
 * Template part: homepage hero section.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<section class="hero">
	<div class="nct-container">
		<p class="hero__kicker"><?php echo esc_html( nct_fanbase_get_option( 'nct_hero_kicker', __( 'Portal Komunitas Penggemar', 'nct-fanbase' ) ) ); ?></p>

		<h1 class="hero__title"><?php echo esc_html( nct_fanbase_get_option( 'nct_hero_title', get_bloginfo( 'name' ) ) ); ?></h1>

		<p class="hero__desc"><?php echo esc_html( nct_fanbase_get_option( 'nct_hero_description', __( 'Pusat informasi, berita, dan jadwal kegiatan komunitas penggemar NCT di Indonesia. Bersih, rapi, dan mudah diikuti.', 'nct-fanbase' ) ) ); ?></p>

		<div class="hero__actions">
			<a class="btn btn-primary" href="<?php echo esc_url( get_post_type_archive_link( 'post' ) ? get_post_type_archive_link( 'post' ) : home_url( '/news/' ) ); ?>">
				<?php esc_html_e( 'Lihat Semua News', 'nct-fanbase' ); ?>
			</a>
			<a class="btn btn-secondary" href="<?php echo esc_url( get_post_type_archive_link( 'nct_schedule' ) ); ?>">
				<?php esc_html_e( 'Lihat Schedule', 'nct-fanbase' ); ?>
			</a>
		</div>
	</div>
</section>
