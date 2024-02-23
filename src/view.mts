import { getContext, store } from "@wordpress/interactivity";

const getCtx = getContext<{ val: number }>;
store("jon/the-block", {
  actions: {
    inc() {
      getCtx().val += 1;
    },
    dec() {
      getCtx().val -= 1;
    },
  },
});
