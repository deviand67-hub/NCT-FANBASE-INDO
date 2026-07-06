<?php
/**
 * News tag archive — same News grid design, filtered to one tag.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<div class="nct-container nct-section">
	<?php nct_fanbase_breadcrumb(); ?>

	<header class="page-header">
		<h1><?php single_tag_title(); ?></h1>
		<p><?php esc_html_e( 'Berita NCT Fanbase dengan tag ini', 'nct-fanbase' ); ?></p>
	</header>

	<?php if ( have_posts() ) : ?>
		<div class="news-grid">
			<?php
			while ( have_posts() ) :
				the_post();
				get_template_part( 'template-parts/content' );
			endwhile;
			?>
		</div>

		<?php nct_fanbase_pagination(); ?>
	<?php else : ?>
		<?php get_template_part( 'template-parts/content', 'none' ); ?>
	<?php endif; ?>
</div>

<?php get_footer(); ?>
