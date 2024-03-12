const { prettyLog } = window.wp["@sirreal/script-shared"];

async function go() {
  prettyLog("hi from a script");
  const { log } = await import("@sirreal/shared");
  const { length } = await wp.apiFetch({ path: "/wp/v2/block-types" });
  log("hi from a script");
  log(`apiFetch found ${length} block types`);
}

go();
