const { prettyLog } = window.wp["@sirreal/script-shared"];
import { log as log1 } from "./shared.js?ver";
import { log as log2 } from "@sirreal/shared";

const {addQueryArgs} = window.wp.url

log1("it worked");
log2(addQueryArgs(window.location.href, {foo:'bar'}));
prettyLog("it worked");
prettyLog(JSON.stringify(Object.is(log1,log2)));
prettyLog(JSON.stringify(log1 === log2));
