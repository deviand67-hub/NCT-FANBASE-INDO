<?php
/**
 * The footer for the NCT Fanbase theme.
 *
 * Renders exactly the simple, copyright-only footer from the original
 * design by default. The footer menu and footer widget area are both
 * registered (per the theme's WordPress feature set) but only print
 * anything if a site owner actually assigns a Footer Menu or adds
 * widgets to the Footer widget area — otherwise the markup below is the
 * whole footer, matching the original "no other links, no complex
 * structure" requirement.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

</main><!-- #main-content -->

<footer class="site-footer">
	<div class="nct-container">
		<?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
			<div class="footer-widgets">
				<?php dynamic_sidebar( 'footer-1' ); ?>
			</div>
		<?php endif; ?>

		<div class="site-footer__inner">
			<?php if ( has_nav_menu( 'footer' ) ) : ?>
				<nav class="footer-navigation" aria-label="<?php esc_attr_e( 'Navigasi footer', 'nct-fanbase' ); ?>">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer',
							'container'      => false,
							'menu_class'     => '',
							'fallback_cb'    => false,
							'depth'          => 1,
						)
					);
					?>
				</nav>
			<?php endif; ?>

			<p><?php echo wp_kses_post( nct_fanbase_get_option( 'nct_footer_text', sprintf( '&copy; %s NCT Fanbase. All rights reserved.', gmdate( 'Y' ) ) ) ); ?></p>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
