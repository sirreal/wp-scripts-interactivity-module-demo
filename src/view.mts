import { getContext, store } from "@wordpress/interactivity";
import apiFetch from "@wordpress/api-fetch";
import * as a11y from "@wordpress/a11y";
import * as blob from "@wordpress/blob";

console.log({ a11y, blob, apiFetch });

const getCtx = getContext<{
  val: number;
  open: boolean;
  search: string;
  result: any;
  path: string;
}>;
store("myplugin/counter-block", {
  state: {
    get buttonText() {
      return `Toggle that <describe> below ${getCtx().open ? "⬆" : "⬇"}`;
    },
    get resultText() {
      return JSON.stringify(getCtx().result, undefined, 2);
    },
  },
  increment() {
    getCtx().val += 1;
  },
  decrement() {
    getCtx().val -= 1;
  },
  expand() {
    getCtx().open = !getCtx().open;
  },
  onToggle(e) {
    e.preventDefault();
    getCtx().open = e.newState === "open";
  },
  *onChangePath(e) {
    const path = e?.currentTarget?.value ?? "/wp/v2/block-types";

    try {
      getCtx().result = yield apiFetch({
        path,
      });
    } catch (e) {
      console.log({ c: getCtx() });
      getCtx().result = e;
    }
  },
});
