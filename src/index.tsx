import * as React from "react";
import metadata from "./block.json";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType(metadata, {
  edit() {
    return <div>counter</div>;
  },
  save() {
    return <div>counter</div>;
  },
});
