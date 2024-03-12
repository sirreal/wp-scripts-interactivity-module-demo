<?php
$ns = 'myplugin/demo';
//wp_interactivity_state($ns, array('x',));
?>
<script>
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});
</script>
<script type="module">
import apiFetch from '@wordpress/api-fetch';
apiFetch.use( apiFetch.createRootURLMiddleware(
    "<?php echo sanitize_url(get_rest_url()); ?>" ),
);
apiFetch.nonceMiddleware = apiFetch.createNonceMiddleware(
    "<?php echo wp_create_nonce('wp_rest'); ?>",
);
apiFetch.use( apiFetch.nonceMiddleware );
apiFetch.use( apiFetch.mediaUploadMiddleware );
apiFetch.nonceEndpoint =
    "<?php echo admin_url('admin-ajax.php?action=rest-nonce'); ?>";
console.log({apiFetch})
</script>
<div
    data-wp-interactive='<?php echo $ns; ?>'
    data-wp-init='onChangePath'
    <?php
    echo get_block_wrapper_attributes();
    echo wp_interactivity_data_wp_context(
        array(
            'val' => 0,
            'open' => false,
            'result' => null
        )
    ) ?>
>
<div>
    <label>
        API path
        <input type='text'
            data-wp-on--input='onChangePath'
            value='/wp/v2/block-types'
         />
    </label>
    <button
        type="button"
        data-wp-text="state.buttonText" data-wp-on--click='onButtonClick'></button>
</div>
<div>
    <input readonly type='number' data-wp-bind--value='context.val' value='0' />
    <button type='button' data-wp-on--click='increment'>+</button>
    <button type='button' data-wp-on--click='decrement'>-</button>

    <details
        data-wp-bind--aria-expanded='context.open'
        data-wp-bind--open='context.open' data-wp-on--toggle='onToggle'>
        <summary>
            Stuff in here, toggle the details <em>OR</em> toggle them above!
        </summary>
        <pre data-wp-text='state.resultText'></pre>
    </details>
</div>
