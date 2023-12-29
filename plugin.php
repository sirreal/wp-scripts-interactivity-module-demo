<?php
/*
 * Plugin Name: A counter
 */

add_action(
	'init', 
	function () {

		if ( defined( 'IS_GUTENBERG_PLUGIN' ) && IS_GUTENBERG_PLUGIN ) {

			$module_path       = plugins_url('/dist/main.js', __FILE__);
			$module_asset_path = __DIR__ . '/dist/main.asset.php';
			$module_asset      = require( $module_asset_path );

			gutenberg_register_module(
				'jon/the-block',
				$module_path,
				$module_asset['dependencies'],
				$module_asset['version'],
			);

			register_block_type(
				'jon/the-block',
				array(
					'title' => 'jonnn',
					'render_callback' => function () {
						gutenberg_enqueue_module( 'jon/the-block' );
						return <<<HTML
	<div data-wp-interactive='{"namespace":"jon/the-block"}'>
		<input readonly type='number' data-wp-bind--value='state.counter' />
		<button data-wp-on--click='actions.inc'>+</button>
		<button data-wp-on--click='actions.dec'>-</button>
	</div>
	HTML;
					},
				)
			);

			
		}
	}
);


