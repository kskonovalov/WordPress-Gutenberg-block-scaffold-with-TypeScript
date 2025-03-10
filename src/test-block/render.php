<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @var array $attributes Block attributes from WordPress.
 */

?>

<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php
	if((boolean)$attributes['showPrefix'] && !empty($attributes['prefix'])) { echo $attributes['prefix'] . " "; }
	echo date('j F Y');
	?>
	<?php
	if(isset($attributes['media']['url']) && !empty($attributes['media']['url'])) {
		echo '<img src="' . esc_url($attributes['media']['url']) . '" alt="' . esc_attr($attributes['media']['alt']) . '" />';
	}
	?>
</p>
