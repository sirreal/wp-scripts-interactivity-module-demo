import { getContext, store } from "@wordpress/interactivity";

const getCtx = getContext<{ val: number }>;
store("myplugin/counter-block", {
  increment() {
    getCtx().val += 1;
  },
  decrement() {
    getCtx().val -= 1;
  },
});
