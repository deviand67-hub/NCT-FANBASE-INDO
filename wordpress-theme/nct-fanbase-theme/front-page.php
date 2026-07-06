<?php
/**
 * The homepage: hero, latest News (featured + side list), and upcoming
 * Schedule preview — matches the original site's front page design.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
get_template_part( 'template-parts/hero' );

$nct_latest = new WP_Query(
	array(
		'post_type'           => 'post',
		'posts_per_page'      => 7,
		'ignore_sticky_posts' => true,
	)
);
?>

<div class="nct-container nct-section">
	<div class="section-heading">
		<div class="section-heading__row">
			<div>
				<h2><?php esc_html_e( 'News', 'nct-fanbase' ); ?></h2>
				<p><?php esc_html_e( 'Kabar dan informasi terbaru', 'nct-fanbase' ); ?></p>
			</div>
			<a class="section-heading__link u-hidden-mobile" href="<?php echo esc_url( get_post_type_archive_link( 'post' ) ? get_post_type_archive_link( 'post' ) : home_url( '/news/' ) ); ?>">
				<?php esc_html_e( 'Semua News →', 'nct-fanbase' ); ?>
			</a>
		</div>
	</div>

	<?php if ( $nct_latest->have_posts() ) : ?>
		<div class="news-split">
			<div>
				<?php
				$nct_latest->the_post();
				global $nct_is_featured;
				$nct_is_featured = true;
				get_template_part( 'template-parts/card-news' );
				$nct_is_featured = false;
				?>
			</div>

			<?php if ( $nct_latest->post_count > 1 ) : ?>
				<div class="news-side-list">
					<h3><?php esc_html_e( 'News Terkini', 'nct-fanbase' ); ?></h3>
					<div class="news-side-list__items">
						<?php
						$nct_side_count = 0;
						while ( $nct_latest->have_posts() && $nct_side_count < 4 ) :
							$nct_latest->the_post();
							$nct_side_count++;
							?>
							<div class="news-side-list__item">
								<div class="meta-row">
									<?php nct_fanbase_the_category_badge(); ?>
									<time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time>
								</div>
								<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
							</div>
							<?php
						endwhile;
						?>
					</div>
				</div>
			<?php endif; ?>
		</div>
		<?php wp_reset_postdata(); ?>
	<?php else : ?>
		<?php get_template_part( 'template-parts/content', 'none' ); ?>
	<?php endif; ?>
</div>

<?php
$nct_next_schedule = nct_fanbase_get_next_schedule( 4 );

if ( $nct_next_schedule->have_posts() ) :
	?>
	<section class="nct-section nct-section--tint">
		<div class="nct-container">
			<div class="section-heading">
				<div class="section-heading__row">
					<div>
						<h2><?php esc_html_e( 'Schedule Terdekat', 'nct-fanbase' ); ?></h2>
						<p><?php esc_html_e( 'Agenda kegiatan dan aktivitas NCT', 'nct-fanbase' ); ?></p>
					</div>
					<a class="section-heading__link u-hidden-mobile" href="<?php echo esc_url( get_post_type_archive_link( 'nct_schedule' ) ); ?>">
						<?php esc_html_e( 'Semua Schedule →', 'nct-fanbase' ); ?>
					</a>
				</div>
			</div>

			<div class="schedule-preview-grid">
				<?php
				while ( $nct_next_schedule->have_posts() ) :
					$nct_next_schedule->the_post();
					?>
					<div class="schedule-preview-card">
						<time datetime="<?php echo esc_attr( get_post_meta( get_the_ID(), '_nct_event_date', true ) ); ?>">
							<?php echo esc_html( nct_fanbase_get_schedule_display_date( get_the_ID() ) ); ?>
						</time>
						<p class="title"><?php the_title(); ?></p>
						<p class="desc"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 18 ) ); ?></p>
					</div>
					<?php
				endwhile;
				wp_reset_postdata();
				?>
			</div>
		</div>
	</section>
	<?php
endif;

get_footer();
