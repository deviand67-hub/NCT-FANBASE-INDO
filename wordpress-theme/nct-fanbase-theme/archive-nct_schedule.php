<?php
/**
 * Schedule archive — lists every "Schedule Item" (nct_schedule custom post
 * type), ordered by event date, matching the original Schedule page.
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
		<h1><?php esc_html_e( 'Schedule', 'nct-fanbase' ); ?></h1>
		<p><?php esc_html_e( 'Jadwal kegiatan dan aktivitas NCT', 'nct-fanbase' ); ?></p>
	</header>

	<p class="schedule-intro">
		<?php esc_html_e( 'Jadwal berikut dirangkum dari informasi dan pengumuman publik, dan dapat berubah sewaktu-waktu mengikuti pengumuman resmi dari pihak agensi.', 'nct-fanbase' ); ?>
	</p>

	<?php if ( have_posts() ) : ?>
		<ol class="schedule-list">
			<?php
			while ( have_posts() ) :
				the_post();
				$nct_event_date = get_post_meta( get_the_ID(), '_nct_event_date', true );
				$nct_tag        = get_post_meta( get_the_ID(), '_nct_tag', true );
				$nct_source     = get_post_meta( get_the_ID(), '_nct_source', true );
				?>
				<li class="schedule-item">
					<div class="schedule-item__meta">
						<time class="schedule-item__date" datetime="<?php echo esc_attr( $nct_event_date ); ?>">
							<?php echo esc_html( nct_fanbase_get_schedule_display_date( get_the_ID() ) ); ?>
						</time>
						<?php if ( $nct_tag ) : ?>
							<span class="schedule-item__tag"><?php echo esc_html( $nct_tag ); ?></span>
						<?php endif; ?>
					</div>
					<div>
						<h2 class="schedule-item__title">
							<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						</h2>
						<div class="schedule-item__desc"><?php the_excerpt(); ?></div>
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
					</div>
				</li>
				<?php
			endwhile;
			?>
		</ol>

		<?php nct_fanbase_pagination(); ?>
	<?php else : ?>
		<?php get_template_part( 'template-parts/content', 'none' ); ?>
	<?php endif; ?>
</div>

<?php get_footer(); ?>
