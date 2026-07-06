<?php
/**
 * Template part: generic static page (About Us, Disclaimer, Privacy
 * Policy, Terms & Conditions, Profil, etc.) — a page-header accent bar
 * followed by the page's own HTML content in the shared prose style.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="page-header">
		<h1><?php the_title(); ?></h1>
		<?php
		$nct_subtitle = get_the_excerpt();
		if ( $nct_subtitle ) :
			?>
			<p><?php echo esc_html( $nct_subtitle ); ?></p>
		<?php endif; ?>
	</header>

	<div class="prose">
		<?php the_content(); ?>
	</div>
</article>

<?php if ( comments_open() || get_comments_number() ) : ?>
	<?php comments_template(); ?>
<?php endif; ?>
