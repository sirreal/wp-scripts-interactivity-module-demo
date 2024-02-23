(async () => {
  const interactivity = await import("@wordpress/interactivity");

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
})().catch(() => {
  function dec(e: Event) {
    e.preventDefault();
    const btn = e.target as HTMLButtonElement;
    btn.parentElement.querySelector(".jon-val").value--;
  }

  function inc(e: Event) {
    e.preventDefault();
    const btn = e.target as HTMLButtonElement;
    btn.parentElement.querySelector(".jon-val").value++;
  }

  function init() {
    [...document.querySelectorAll(".jon-inc")].forEach((el) =>
      el.addEventListener("click", inc),
    );
    [...document.querySelectorAll(".jon-dec")].forEach((el) =>
      el.addEventListener("click", dec),
    );
  }

  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
});
