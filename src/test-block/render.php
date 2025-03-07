<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php
	if((boolean)$attributes['showPrefix'] && !empty($attributes['prefix'])) { echo esc_html($attributes['prefix']) . " "; }
	echo date('j F Y');
	echo $content;
	?>
</p>
