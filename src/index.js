import * as bs from "@wordpress/blocks";
import * as React from "react";

const metadata = {
  $schema: "https://schemas.wp.org/trunk/block.json",
  apiVersion: 3,
  title: "Jon's cool counter",
  name: "jon/the-block",
  editorScript: "file:./index.js",
  viewModule: "file:./main.js",
  render: "file:./render.php",
  category: "text",
};

bs.registerBlockType(metadata, {
  edit() {
    return <div>counter</div>;
  },
  save() {
    return <div>counter</div>;
  },
});
