const metadata = {
	$schema: 'https://schemas.wp.org/trunk/block.json',
	apiVersion: 3,
	title: "Jon's cool counter",
	name: 'jon/the-block',
	editorScript: 'file:./index.js',
	viewModule: 'file:./main.js',
	render: 'file:./render.php',
	category: 'text',
};

/** @type {import('@wordpress/blocks')*/
const bs = window.wp.blocks;
/** @type {import('react')*/
const React = window.React;

bs.registerBlockType( metadata, {
	edit() {
		return React.createElement( 'div', {}, 'counter' );
	},
	save() {
		return React.createElement( 'div', {}, 'counter' );
	},
} );
