// import apiFetch from "@wordpress/api-fetch";
import { getContext, store } from "@wordpress/interactivity";
// import * as a11y from "@wordpress/a11y";
// import * as blob from "@wordpress/blob";
// import * as dom from "@wordpress/dom";
// import * as domReady from "@wordpress/dom";



// console.log({ a11y, blob, apiFetch,dom,domReady });

const getCtx = getContext;
console.log('registering store');
store("myplugin/demo", {
  state: {
    get buttonText() {
      return `Toggle that <describe> below ${getCtx().open ? "⬆" : "⬇"}`
    },
    get resultText() {
      console.log({ctx: getCtx()})
      return JSON.stringify(getCtx().result, undefined, 2);
    },
  },
  increment() {
    getCtx().val += 1;
  },
  decrement() {
    getCtx().val -= 1;
  },
  onButtonClick() {
    getCtx().open = !getCtx().open;
  },
  onToggle(e) {
    e.preventDefault();
    getCtx().open = e.newState === "open";
  },
  *onChangePath(e) {
    const path = e?.currentTarget?.value ?? "/wp/v2/block-types";

    const apiFetchModule = yield import('@wordpress/api-fetch');
    const apiFetch = apiFetchModule.default;

    try {
      getCtx().result = yield apiFetch({ path });
      console.log({ res: getCtx().result });
    } catch (e) {
      console.log({ res: getCtx() });
      getCtx().result = e;
    }
  },
});
console.log('done registering store');
