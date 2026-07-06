<?php
/**
 * The main template file — fallback used when no more specific template
 * matches (see the WordPress Template Hierarchy).
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<div class="nct-container nct-section">
	<?php if ( have_posts() ) : ?>
		<?php if ( ! is_home() ) : ?>
			<header class="page-header">
				<h1><?php the_archive_title(); ?></h1>
			</header>
		<?php endif; ?>

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
