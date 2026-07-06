<?php
/**
 * The "Sidebar" widget area template.
 *
 * Not called from any of the default page templates — the original design
 * has no sidebar. It is kept here, registered, and ready to use only if a
 * site owner (or a child theme) explicitly calls get_sidebar().
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>
<aside id="secondary" class="widget-area" aria-label="<?php esc_attr_e( 'Sidebar', 'nct-fanbase' ); ?>">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside>
