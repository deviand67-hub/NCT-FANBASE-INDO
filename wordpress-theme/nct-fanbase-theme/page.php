<?php
/**
 * Generic static page template — About Us, Contact Us, Disclaimer,
 * Privacy Policy, Terms & Conditions, Profil, and any other Page.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<div class="nct-container nct-section">
	<?php nct_fanbase_breadcrumb(); ?>

	<?php
	while ( have_posts() ) :
		the_post();
		get_template_part( 'template-parts/content', 'page' );
	endwhile;
	?>
</div>

<?php get_footer(); ?>
