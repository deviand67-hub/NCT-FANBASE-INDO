<?php
/**
 * Template part: generic post card used by the main loop fallback
 * (index.php) and anywhere else that needs the standard News card.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $nct_is_featured;
$nct_is_featured = false;

get_template_part( 'template-parts/card-news' );
