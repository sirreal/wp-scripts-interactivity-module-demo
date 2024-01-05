async function init() {
  if ((init as any).init) {
    return;
  }
  (init as any).init = true;

  const interactivity = await import("@wordpress/interactivity");
  interactivity.store<any>("jon/the-block", {
    actions: {
      inc() {
        const ctx = interactivity.getContext<any>();
        ctx.val += 1;
      },
      dec() {
        const ctx = interactivity.getContext<any>();
        ctx.val -= 1;
      },
    },
  });
}

document
  .querySelector('[data-wp-interactive*=\'"namespace":"jon/the-block"\']')!
  .addEventListener("mouseenter", init, { once: true });

document
  .querySelector('[data-wp-interactive*=\'"namespace":"jon/the-block"\']')!
  .addEventListener("focusin", init, { once: true });
