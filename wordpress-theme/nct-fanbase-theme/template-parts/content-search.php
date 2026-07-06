<?php
/**
 * Template part: a single search result row.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'search-result' ); ?>>
	<div class="meta-row">
		<?php if ( 'post' === get_post_type() ) : ?>
			<?php nct_fanbase_the_category_badge(); ?>
		<?php else : ?>
			<span class="category-badge"><?php echo esc_html( get_post_type_object( get_post_type() )->labels->singular_name ); ?></span>
		<?php endif; ?>
		<time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time>
	</div>
	<h2 class="search-result__title">
		<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
	</h2>
	<p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 30 ) ); ?></p>
</article>
