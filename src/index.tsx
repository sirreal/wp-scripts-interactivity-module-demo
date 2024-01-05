import * as bs from "@wordpress/blocks";
import * as React from "react";

import metadata from "./block.json";

bs.registerBlockType(metadata, {
  edit() {
    return <div>counter</div>;
  },
  save() {
    return <div>counter</div>;
  },
});
