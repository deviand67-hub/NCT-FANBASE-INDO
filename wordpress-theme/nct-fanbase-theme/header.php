<?php
/**
 * The header for the NCT Fanbase theme.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<?php if ( is_singular() && pings_open() ) : ?>
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<?php endif; ?>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#main-content"><?php esc_html_e( 'Langsung ke konten utama', 'nct-fanbase' ); ?></a>

<header class="site-header">
	<div class="nct-container site-header__inner">
		<div class="site-branding">
			<?php if ( has_custom_logo() ) : ?>
				<?php the_custom_logo(); ?>
			<?php else : ?>
				<span class="site-branding__mark" aria-hidden="true">
					<?php echo esc_html( function_exists( 'mb_substr' ) ? mb_substr( get_bloginfo( 'name' ), 0, 1 ) : substr( get_bloginfo( 'name' ), 0, 1 ) ); ?>
				</span>
			<?php endif; ?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
				<?php bloginfo( 'name' ); ?>
			</a>
		</div>

		<nav class="primary-navigation" aria-label="<?php esc_attr_e( 'Navigasi utama', 'nct-fanbase' ); ?>">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => false,
					'menu_class'     => '',
					'fallback_cb'    => false,
					'depth'          => 1,
				)
			);
			?>
		</nav>

		<details class="mobile-nav-details">
			<summary class="menu-toggle" aria-label="<?php esc_attr_e( 'Buka menu navigasi', 'nct-fanbase' ); ?>">
				<span aria-hidden="true">&#9776;</span>
			</summary>
			<nav class="mobile-navigation" aria-label="<?php esc_attr_e( 'Navigasi mobile', 'nct-fanbase' ); ?>">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'primary',
						'container'      => false,
						'menu_class'     => '',
						'fallback_cb'    => false,
						'depth'          => 1,
					)
				);
				?>
			</nav>
		</details>
	</div>
</header>

<main id="main-content" class="site-main">
