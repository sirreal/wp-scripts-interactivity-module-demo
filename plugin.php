<?php
/*
 * Plugin Name: A counter
 */

add_action(
    'init',
    function () {
        register_block_type_from_metadata(__DIR__ . '/build/block.json');
    }
);
