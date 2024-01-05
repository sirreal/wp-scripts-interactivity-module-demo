import * as interactivity from "@wordpress/interactivity";

const getCtx = interactivity.getContext<{ val: number }>;

interactivity.store("jon/the-block", {
  actions: {
    inc() {
      const ctx = getCtx();
      ctx.val += 1;
    },
    dec() {
      const ctx = getCtx();
      ctx.val -= 1;
    },
  },
});
