<?php
/**
 * Template part: a single news card, used in the loop.
 *
 * Reads the shared `$nct_is_featured` global (set by the calling template
 * right before `get_template_part()`) so the same markup can render both
 * the small grid cards and the larger featured card. Compatible with
 * WordPress 5.0+ (does not rely on the get_template_part() $args
 * parameter, which only exists from 5.5 onward).
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $nct_is_featured;

$nct_featured   = ! empty( $nct_is_featured );
$nct_card_class = $nct_featured ? 'news-card news-card--featured' : 'news-card';
?>
<article <?php post_class( $nct_card_class ); ?>>
	<div class="news-card__media">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( $nct_featured ? 'nct-card-featured' : 'nct-card', array( 'alt' => the_title_attribute( array( 'echo' => false ) ) ) ); ?>
		<?php else : ?>
			<img src="<?php echo esc_url( NCT_FANBASE_URI . '/assets/images/placeholder-news.svg' ); ?>" alt="" loading="lazy" />
		<?php endif; ?>
	</div>

	<div class="news-card__body">
		<div class="meta-row">
			<?php nct_fanbase_the_category_badge(); ?>
			<time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time>
		</div>

		<h3 class="news-card__title">
			<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		</h3>

		<p class="news-card__excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 20 ) ); ?></p>
	</div>
</article>
