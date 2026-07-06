<?php
/**
 * Comments template.
 *
 * News articles ship with comments closed by default (the original design
 * has no comment UI), but this template renders cleanly, in brand style,
 * for any post/page where a site owner chooses to enable them.
 *
 * @package NCT_Fanbase
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( post_password_required() ) {
	return;
}
?>
<div id="comments" class="comments-area">

	<?php if ( have_comments() ) : ?>
		<h2 class="comments-title">
			<?php
			$nct_comment_count = get_comments_number();

			if ( 1 === (int) $nct_comment_count ) {
				esc_html_e( '1 Komentar', 'nct-fanbase' );
			} else {
				echo esc_html(
					sprintf(
						/* translators: %s: number of comments. */
						_n( '%s Komentar', '%s Komentar', $nct_comment_count, 'nct-fanbase' ),
						number_format_i18n( $nct_comment_count )
					)
				);
			}
			?>
		</h2>

		<ol class="comment-list">
			<?php
			wp_list_comments(
				array(
					'style'       => 'ol',
					'short_ping'  => true,
					'avatar_size' => 48,
				)
			);
			?>
		</ol>

		<?php
		the_comments_pagination(
			array(
				'prev_text' => __( '&larr; Sebelumnya', 'nct-fanbase' ),
				'next_text' => __( 'Selanjutnya &rarr;', 'nct-fanbase' ),
				'class'     => 'pagination',
			)
		);
		?>

	<?php endif; ?>

	<?php if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>
		<p class="no-comments"><?php esc_html_e( 'Komentar ditutup.', 'nct-fanbase' ); ?></p>
	<?php endif; ?>

	<?php
	comment_form(
		array(
			'class_form'   => 'comment-form',
			'title_reply'  => __( 'Tinggalkan Komentar', 'nct-fanbase' ),
			'label_submit' => __( 'Kirim Komentar', 'nct-fanbase' ),
		)
	);
	?>

</div><!-- #comments -->
