<?php
/**
 * Template part: shown when a query returns no posts.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="no-results">
	<?php if ( is_search() ) : ?>
		<p>
			<?php
			printf(
				/* translators: %s: search term. */
				esc_html__( 'Tidak ada hasil untuk pencarian "%s". Coba kata kunci lain.', 'nct-fanbase' ),
				esc_html( get_search_query() )
			);
			?>
		</p>
		<?php get_search_form(); ?>
	<?php else : ?>
		<p><?php esc_html_e( 'Belum ada konten untuk ditampilkan di sini.', 'nct-fanbase' ); ?></p>
	<?php endif; ?>
</div>
