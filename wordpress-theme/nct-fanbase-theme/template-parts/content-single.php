<?php
/**
 * Template part: full News article view (matches the original detail page —
 * breadcrumb, category + date, featured image, article body, related news).
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<?php nct_fanbase_breadcrumb(); ?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'article' ); ?>>
	<header class="article__header">
		<div class="meta-row">
			<?php nct_fanbase_the_category_badge(); ?>
			<time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time>
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
</article>

<?php
$nct_related = new WP_Query(
	array(
		'post_type'           => 'post',
		'posts_per_page'      => 3,
		'post__not_in'        => array( get_the_ID() ),
		'category__in'        => wp_get_post_categories( get_the_ID() ),
		'ignore_sticky_posts' => true,
	)
);

if ( $nct_related->have_posts() ) :
	?>
	<section class="related-news">
		<h2><?php esc_html_e( 'News Lainnya', 'nct-fanbase' ); ?></h2>
		<div class="news-grid">
			<?php
			while ( $nct_related->have_posts() ) :
				$nct_related->the_post();
				global $nct_is_featured;
				$nct_is_featured = false;
				get_template_part( 'template-parts/card-news' );
			endwhile;
			?>
		</div>
	</section>
	<?php
	wp_reset_postdata();
endif;

if ( comments_open() || get_comments_number() ) :
	comments_template();
endif;
?>
