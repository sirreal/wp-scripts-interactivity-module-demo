<?php
/*
 * Plugin Name: A demo
 */

add_action(
    'init',
    function () {
        register_block_type(__DIR__ . '/build/block.json');

        // wp_register_script_module(
        //     '@sirreal/shared',
        //     plugin_dir_url(__FILE__) . 'shared.js',
        //     [],
        //     ''
        // );

        // wp_enqueue_script_module(
        //     '@sirreal/entry',
        //     plugin_dir_url(__FILE__) . 'entry.js',
        //     array( '@sirreal/shared', '@wordpress/interactivity' )
        // );

        // wp_register_script(
        //     'sirreal-script-shared',
        //     plugin_dir_url(__file__) . 'script-shared.js',
        //     array(
        //     // array( 'type' => 'script-module', 'id' => '@wordpress/interactivity', 'import' => 'static' ),
        //     )
        // );

        // wp_enqueue_script(
        //     'script',
        //     plugin_dir_url(__file__) . 'script.js',
        //     array(
        //     'sirreal-script-shared',
        //     'wp-api-fetch',
        //     'wp-i18n',
        //     'wp-url',
        //     // array( 'type' => 'script-module', 'id' => '@wordpress/interactivity', 'import' => 'static' ),
        //     ),
        //     false,
        //     true
        // );

    }
);
