<?php
$id = wp_unique_id('myplugin/counter');
?><div data-wp-init='onChangePath' data-wp-interactive='myplugin/counter-block'
<?php
echo get_block_wrapper_attributes();
echo wp_interactivity_data_wp_context(
    array(
        'val' => 0,
        'open' => false,
        'result' => null
    )
) ?>>
<div>
    <label>
        API path
        <input type='text'
            data-wp-on--input='onChangePath'
            value='/wp/v2/block-types'
         />
    </label>
    <button type="button" data-wp-text="state.buttonText" data-wp-on--click='expand'></button>
</div>
<div>
    <input readonly type='number' data-wp-bind--value='context.val' />
    <button type='button' data-wp-on--click='increment'>+</button>
    <button type='button' data-wp-on--click='decrement'>-</button>

    <details id="<?php esc_attr_e($id) ?>" data-wp-bind--open='context.open' data-wp-on--toggle='onToggle'>
        <summary>Stuff in here, this can be toggled below</summary>

        <h1>Wow, it expanded!</h1>
        <pre data-wp-text='state.resultText'></pre>
    </details>
</div>
