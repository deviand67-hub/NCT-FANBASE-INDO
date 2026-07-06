<?php
/**
 * NCT Fanbase theme bootstrap.
 *
 * PHP 7.1 compatible. No typed properties, arrow functions, match
 * expressions, constructor property promotion, union types, enums,
 * or named arguments are used anywhere in this theme.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'NCT_FANBASE_VERSION', '1.0.0' );
define( 'NCT_FANBASE_DIR', get_template_directory() );
define( 'NCT_FANBASE_URI', get_template_directory_uri() );

require_once NCT_FANBASE_DIR . '/inc/setup.php';
require_once NCT_FANBASE_DIR . '/inc/enqueue.php';
require_once NCT_FANBASE_DIR . '/inc/customizer.php';
require_once NCT_FANBASE_DIR . '/inc/widgets.php';
require_once NCT_FANBASE_DIR . '/inc/custom-post-types.php';
require_once NCT_FANBASE_DIR . '/inc/template-tags.php';
