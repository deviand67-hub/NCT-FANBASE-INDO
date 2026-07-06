<?php
/**
 * Blog posts index — used when Settings > Reading has a separate
 * "Posts page" assigned. Matches the original News list page design.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<div class="nct-container nct-section">
	<header class="page-header">
		<h1><?php single_post_title(); ?></h1>
		<p><?php esc_html_e( 'Seluruh berita dan pengumuman dari NCT Fanbase', 'nct-fanbase' ); ?></p>
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
