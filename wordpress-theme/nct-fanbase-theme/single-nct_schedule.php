<?php
/**
 * Single "Schedule Item" view.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<div class="nct-container nct-section">
	<?php
	while ( have_posts() ) :
		the_post();
		$nct_event_date = get_post_meta( get_the_ID(), '_nct_event_date', true );
		$nct_tag        = get_post_meta( get_the_ID(), '_nct_tag', true );
		$nct_source     = get_post_meta( get_the_ID(), '_nct_source', true );
		?>
		<?php nct_fanbase_breadcrumb(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class( 'article' ); ?>>
			<header class="article__header">
				<div class="meta-row">
					<?php if ( $nct_tag ) : ?>
						<span class="category-badge"><?php echo esc_html( $nct_tag ); ?></span>
					<?php endif; ?>
					<time datetime="<?php echo esc_attr( $nct_event_date ); ?>">
						<?php echo esc_html( nct_fanbase_get_schedule_display_date( get_the_ID() ) ); ?>
					</time>
				</div>
				<h1 class="article__title"><?php the_title(); ?></h1>
			</header>

			<?php if ( has_post_thumbnail() ) : ?>
				<div class="article__media">
					<?php the_post_thumbnail( 'nct-card-featured', array( 'alt' => the_title_attribute( array( 'echo' => false ) ) ) ); ?>
				</div>
			<?php endif; ?>

			<div class="prose">
				<?php the_content(); ?>
			</div>

			<?php if ( $nct_source ) : ?>
				<p class="schedule-item__source">
					<?php
					printf(
						/* translators: %s: source names. */
						esc_html__( 'Sumber: %s', 'nct-fanbase' ),
						esc_html( $nct_source )
					);
					?>
				</p>
			<?php endif; ?>
		</article>
		<?php
	endwhile;
	?>
</div>

<?php get_footer(); ?>
