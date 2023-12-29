import("@wordpress/interactivity").then(({ store }) => {
  const { state } = store("jon/the-block", {
    state: {
      counter: 0,
    },
    actions: {
      inc() {
        state.counter += 1;
      },
      dec() {
        state.counter -= 1;
      },
    },
  });

  console.log({ state });
});
