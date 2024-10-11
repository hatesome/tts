<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package main-theme
 */

get_header();
?>

	<main id="primary" class="site-main">

		<section class="error-404 not-found">
			<?php echo do_shortcode('[elementor_short id="1224"]'); ?>
		</section><!-- .error-404 -->

	</main><!-- #main -->

<?php
get_footer();
