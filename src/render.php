<div <?php echo get_block_wrapper_attributes(); ?> data-wp-interactive='myplugin/counter-block' data-wp-context='{"val":0}'>
    <input readonly type='number' class='jon-val' data-wp-bind--value='context.val' value='0' />
    <button class='jon-inc' data-wp-on--click='increment'>+</button>
    <button class='jon-dec' data-wp-on--click='decrement'>-</button>
</div>
