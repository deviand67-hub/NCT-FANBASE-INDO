<?php
/**
 * Author archive.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
$nct_author = get_queried_object();
?>

<div class="nct-container nct-section">
	<header class="page-header">
		<h1>
			<?php
			/* translators: %s: author display name. */
			printf( esc_html__( 'Tulisan oleh %s', 'nct-fanbase' ), esc_html( $nct_author->display_name ) );
			?>
		</h1>
		<?php
		$nct_bio = get_the_author_meta( 'description', $nct_author->ID );
		if ( $nct_bio ) :
			?>
			<p><?php echo esc_html( $nct_bio ); ?></p>
		<?php endif; ?>
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
