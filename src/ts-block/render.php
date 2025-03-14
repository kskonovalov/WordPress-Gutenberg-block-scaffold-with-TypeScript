<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @var array $attributes Block attributes from WordPress.
 * @var WP_Block $block Block instance.
 */

/**
 * Use this to DYNAMIC blocks
 * Most likely save.tsx should just return null in this case
 */
?>

<div <?php
echo get_block_wrapper_attributes(); ?>>
	<?php
	if ((boolean)$attributes['showPrefix'] && ! empty($attributes['prefix'])) {
		echo $attributes['prefix'] . " ";
	}
	echo date('j F Y');
	?>
	<?php
	if (isset($attributes['media']['url']) && ! empty($attributes['media']['url'])) {
		echo '<img src="' . esc_url($attributes['media']['url']) . '" alt="' . esc_attr(
				$attributes['media']['alt']
			) . '" class="responsive-image"  />';
	}
	?>
	<?php
	foreach ( $block->inner_blocks as $inner_block ) {
		echo $inner_block->render();
	}
	?>
</div>
