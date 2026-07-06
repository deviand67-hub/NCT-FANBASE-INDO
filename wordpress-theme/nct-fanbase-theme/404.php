<?php
/**
 * 404 — page not found.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<div class="nct-container">
	<div class="not-found">
		<p class="not-found__kicker"><?php esc_html_e( 'Error 404', 'nct-fanbase' ); ?></p>
		<h1 class="not-found__title"><?php esc_html_e( 'Halaman Tidak Ditemukan', 'nct-fanbase' ); ?></h1>
		<p>
			<?php esc_html_e( 'Halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan kembali ke halaman utama NCT Fanbase.', 'nct-fanbase' ); ?>
		</p>
		<a class="btn btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>">
			<?php esc_html_e( 'Kembali ke Home', 'nct-fanbase' ); ?>
		</a>
	</div>
</div>

<?php get_footer(); ?>
