<?php
/**
 * Generic archive template (date archives, author fallback, or any post
 * type archive without a more specific archive-{post_type}.php file).
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
		<h1><?php the_archive_title(); ?></h1>
		<?php the_archive_description( '<p>', '</p>' ); ?>
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
