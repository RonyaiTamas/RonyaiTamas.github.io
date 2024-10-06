// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gjUm6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "022c1b16b4b6dfad";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"d8Dch":[function(require,module,exports) {
var _apprun = require("apprun");
class App extends (0, _apprun.Component) {
    state = "Igen";
    view = (state)=>/*#__PURE__*/ React.createElement("h3", {
            __source: {
                fileName: "src/index.jsx",
                lineNumber: 5,
                columnNumber: 21
            },
            __self: this
        }, state);
}
(0, _apprun.app).render(document.getElementById("root"), /*#__PURE__*/ React.createElement(App, {
    __source: {
        fileName: "src/index.jsx",
        lineNumber: 8,
        columnNumber: 45
    },
    __self: undefined
}));

},{"apprun":"gdxlU"}],"gdxlU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>(0, _app.App));
parcelHelpers.export(exports, "app", ()=>(0, _appDefault.default));
parcelHelpers.export(exports, "Component", ()=>(0, _component.Component));
parcelHelpers.export(exports, "on", ()=>(0, _decorator.on));
parcelHelpers.export(exports, "update", ()=>(0, _decorator.update));
parcelHelpers.export(exports, "Fragment", ()=>(0, _vdom.Fragment));
parcelHelpers.export(exports, "safeHTML", ()=>(0, _vdom.safeHTML));
parcelHelpers.export(exports, "event", ()=>(0, _decorator.update));
parcelHelpers.export(exports, "ROUTER_EVENT", ()=>(0, _router.ROUTER_EVENT));
parcelHelpers.export(exports, "ROUTER_404_EVENT", ()=>(0, _router.ROUTER_404_EVENT));
parcelHelpers.export(exports, "customElement", ()=>(0, _decorator.customElement));
var _app = require("./app");
var _appDefault = parcelHelpers.interopDefault(_app);
var _vdom = require("./vdom");
var _component = require("./component");
var _decorator = require("./decorator");
var _webComponent = require("./web-component");
var _webComponentDefault = parcelHelpers.interopDefault(_webComponent);
var _router = require("./router");
exports.default = (0, _appDefault.default);
if (!(0, _appDefault.default).start) {
    (0, _appDefault.default).h = (0, _appDefault.default).createElement = (0, _vdom.createElement);
    (0, _appDefault.default).render = (0, _vdom.render);
    (0, _appDefault.default).Fragment = (0, _vdom.Fragment);
    (0, _appDefault.default).webComponent = (0, _webComponentDefault.default);
    (0, _appDefault.default).safeHTML = (0, _vdom.safeHTML);
    (0, _appDefault.default).start = (element, model, view, update, options)=>{
        const opts = Object.assign({
            render: true,
            global_event: true
        }, options);
        const component = new (0, _component.Component)(model, view, update);
        if (options && options.rendered) component.rendered = options.rendered;
        if (options && options.mounted) component.mounted = options.mounted;
        component.start(element, opts);
        return component;
    };
    const NOOP = (_)=>{};
    (0, _appDefault.default).on("$", NOOP);
    (0, _appDefault.default).on("debug", (_)=>NOOP);
    (0, _appDefault.default).on((0, _router.ROUTER_EVENT), NOOP);
    (0, _appDefault.default).on("#", NOOP);
    (0, _appDefault.default)["route"] = (0, _router.route);
    (0, _appDefault.default).on("route", (url)=>(0, _appDefault.default)["route"] && (0, _appDefault.default)["route"](url));
    if (typeof document === "object") document.addEventListener("DOMContentLoaded", ()=>{
        if ((0, _appDefault.default)["route"] === (0, _router.route)) {
            window.onpopstate = ()=>(0, _router.route)(location.hash);
            document.body.hasAttribute("apprun-no-init") || (0, _appDefault.default)["no-init-route"] || (0, _router.route)(location.hash);
        }
    });
    if (typeof window === "object") {
        window["Component"] = (0, _component.Component);
        window["_React"] = window["React"];
        window["React"] = (0, _appDefault.default);
        window["on"] = (0, _decorator.on);
        window["customElement"] = (0, _decorator.customElement);
        window["safeHTML"] = (0, _vdom.safeHTML);
    }
    (0, _appDefault.default).use_render = (render, mode = 0)=>mode === 0 ? (0, _appDefault.default).render = (el, vdom)=>render(vdom, el) : (0, _appDefault.default).render = (el, vdom)=>render(el, vdom); // apprun style
    (0, _appDefault.default).use_react = (React, ReactDOM)=>{
        (0, _appDefault.default).h = (0, _appDefault.default).createElement = React.createElement;
        (0, _appDefault.default).Fragment = React.Fragment;
        (0, _appDefault.default).render = (el, vdom)=>ReactDOM.render(vdom, el);
        if (React.version && React.version.startsWith("18")) (0, _appDefault.default).render = (el, vdom)=>{
            if (!el || !vdom) return;
            if (!el._root) el._root = ReactDOM.createRoot(el);
            el._root.render(vdom);
        };
    };
}

},{"./app":"kGCC3","./vdom":"fBFuF","./component":"bSDus","./decorator":"6qxky","./web-component":"bTtTF","./router":"buVFD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kGCC3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App);
var global = arguments[3];
class App {
    constructor(){
        this._events = {};
    }
    on(name, fn, options = {}) {
        this._events[name] = this._events[name] || [];
        this._events[name].push({
            fn,
            options
        });
    }
    off(name, fn) {
        const subscribers = this._events[name] || [];
        this._events[name] = subscribers.filter((sub)=>sub.fn !== fn);
    }
    find(name) {
        return this._events[name];
    }
    run(name, ...args) {
        const subscribers = this.getSubscribers(name, this._events);
        console.assert(subscribers && subscribers.length > 0, "No subscriber for event: " + name);
        subscribers.forEach((sub)=>{
            const { fn, options } = sub;
            if (options.delay) this.delay(name, fn, args, options);
            else Object.keys(options).length > 0 ? fn.apply(this, [
                ...args,
                options
            ]) : fn.apply(this, args);
            return !sub.options.once;
        });
        return subscribers.length;
    }
    once(name, fn, options = {}) {
        this.on(name, fn, Object.assign(Object.assign({}, options), {
            once: true
        }));
    }
    delay(name, fn, args, options) {
        if (options._t) clearTimeout(options._t);
        options._t = setTimeout(()=>{
            clearTimeout(options._t);
            Object.keys(options).length > 0 ? fn.apply(this, [
                ...args,
                options
            ]) : fn.apply(this, args);
        }, options.delay);
    }
    runAsync(name, ...args) {
        const subscribers = this.getSubscribers(name, this._events);
        console.assert(subscribers && subscribers.length > 0, "No subscriber for event: " + name);
        const promises = subscribers.map((sub)=>{
            const { fn, options } = sub;
            return Object.keys(options).length > 0 ? fn.apply(this, [
                ...args,
                options
            ]) : fn.apply(this, args);
        });
        return Promise.all(promises);
    }
    query(name, ...args) {
        return this.runAsync(name, ...args);
    }
    getSubscribers(name, events) {
        const subscribers = events[name] || [];
        // Update the list of subscribers by pulling out those which will run once.
        // We must do this update prior to running any of the events in case they
        // cause additional events to be turned off or on.
        events[name] = subscribers.filter((sub)=>{
            return !sub.options.once;
        });
        Object.keys(events).filter((evt)=>evt.endsWith("*") && name.startsWith(evt.replace("*", ""))).sort((a, b)=>b.length - a.length).forEach((evt)=>subscribers.push(...events[evt].map((sub)=>Object.assign(Object.assign({}, sub), {
                    options: Object.assign(Object.assign({}, sub.options), {
                        event: name
                    })
                }))));
        return subscribers;
    }
}
const AppRunVersions = "AppRun-3";
let app;
const root = typeof self === "object" && self.self === self && self || typeof global === "object" && global.global === global && global;
if (root["app"] && root["_AppRunVersions"]) app = root["app"];
else {
    app = new App();
    root["app"] = app;
    root["_AppRunVersions"] = AppRunVersions;
}
exports.default = app;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fBFuF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>(0, _vdomMy.createElement));
parcelHelpers.export(exports, "Fragment", ()=>(0, _vdomMy.Fragment));
parcelHelpers.export(exports, "render", ()=>(0, _vdomMy.updateElement));
parcelHelpers.export(exports, "safeHTML", ()=>(0, _vdomMy.safeHTML));
parcelHelpers.export(exports, "jsx", ()=>(0, _vdomMy.createElement));
parcelHelpers.export(exports, "jsxs", ()=>(0, _vdomMy.createElement));
var _vdomMy = require("./vdom-my");

},{"./vdom-my":"7q9Oy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7q9Oy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Fragment", ()=>Fragment);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "updateElement", ()=>updateElement);
parcelHelpers.export(exports, "safeHTML", ()=>safeHTML);
parcelHelpers.export(exports, "updateProps", ()=>updateProps);
var _directive = require("./directive");
var _directiveDefault = parcelHelpers.interopDefault(_directive);
function Fragment(props, ...children) {
    return collect(children);
}
const ATTR_PROPS = "_props";
function collect(children) {
    const ch = [];
    const push = (c)=>{
        if (c !== null && c !== undefined && c !== "" && c !== false) ch.push(typeof c === "function" || typeof c === "object" ? c : `${c}`);
    };
    children && children.forEach((c)=>{
        if (Array.isArray(c)) c.forEach((i)=>push(i));
        else push(c);
    });
    return ch;
}
function createElement(tag, props, ...children) {
    const ch = collect(children);
    if (typeof tag === "string") return {
        tag,
        props,
        children: ch
    };
    else if (Array.isArray(tag)) return tag; // JSX fragments - babel
    else if (tag === undefined && children) return ch; // JSX fragments - typescript
    else if (Object.getPrototypeOf(tag).__isAppRunComponent) return {
        tag,
        props,
        children: ch
    }; // createComponent(tag, { ...props, children });
    else if (typeof tag === "function") return tag(props, ch);
    else throw new Error(`Unknown tag in vdom ${tag}`);
}
const keyCache = new WeakMap();
const updateElement = (element, nodes, component = {})=>{
    // tslint:disable-next-line
    if (nodes == null || nodes === false) return;
    const el = typeof element === "string" && element ? document.getElementById(element) || document.querySelector(element) : element;
    nodes = (0, _directiveDefault.default)(nodes, component);
    render(el, nodes, component);
};
function render(element, nodes, parent = {}) {
    // tslint:disable-next-line
    if (nodes == null || nodes === false) return;
    nodes = createComponent(nodes, parent);
    if (!element) return;
    const isSvg = element.nodeName === "SVG";
    if (Array.isArray(nodes)) updateChildren(element, nodes, isSvg);
    else updateChildren(element, [
        nodes
    ], isSvg);
}
function same(el, node) {
    // if (!el || !node) return false;
    const key1 = el.nodeName;
    const key2 = `${node.tag || ""}`;
    return key1.toUpperCase() === key2.toUpperCase();
}
function update(element, node, isSvg) {
    if (node["_op"] === 3) return;
    // console.assert(!!element);
    isSvg = isSvg || node.tag === "svg";
    if (!same(element, node)) {
        element.parentNode.replaceChild(create(node, isSvg), element);
        return;
    }
    !(node["_op"] & 2) && updateChildren(element, node.children, isSvg);
    !(node["_op"] & 1) && updateProps(element, node.props, isSvg);
}
function updateChildren(element, children, isSvg) {
    var _a, _b;
    const old_len = ((_a = element.childNodes) === null || _a === void 0 ? void 0 : _a.length) || 0;
    const new_len = (children === null || children === void 0 ? void 0 : children.length) || 0;
    const len = Math.min(old_len, new_len);
    for(let i = 0; i < len; i++){
        const child = children[i];
        if (child["_op"] === 3) continue;
        const el = element.childNodes[i];
        if (typeof child === "string") {
            if (el.textContent !== child) {
                if (el.nodeType === 3) el.nodeValue = child;
                else element.replaceChild(createText(child), el);
            }
        } else if (child instanceof HTMLElement || child instanceof SVGElement) element.insertBefore(child, el);
        else {
            const key = child.props && child.props["key"];
            if (key) {
                if (el.key === key) update(element.childNodes[i], child, isSvg);
                else {
                    // console.log(el.key, key);
                    const old = keyCache[key];
                    if (old) {
                        const temp = old.nextSibling;
                        element.insertBefore(old, el);
                        temp ? element.insertBefore(el, temp) : element.appendChild(el);
                        update(element.childNodes[i], child, isSvg);
                    } else element.replaceChild(create(child, isSvg), el);
                }
            } else update(element.childNodes[i], child, isSvg);
        }
    }
    let n = ((_b = element.childNodes) === null || _b === void 0 ? void 0 : _b.length) || 0;
    while(n > len){
        element.removeChild(element.lastChild);
        n--;
    }
    if (new_len > len) {
        const d = document.createDocumentFragment();
        for(let i = len; i < children.length; i++)d.appendChild(create(children[i], isSvg));
        element.appendChild(d);
    }
}
const safeHTML = (html)=>{
    const div = document.createElement("section");
    div.insertAdjacentHTML("afterbegin", html);
    return Array.from(div.children);
};
function createText(node) {
    if ((node === null || node === void 0 ? void 0 : node.indexOf("_html:")) === 0) {
        const div = document.createElement("div");
        div.insertAdjacentHTML("afterbegin", node.substring(6));
        return div;
    } else return document.createTextNode(node !== null && node !== void 0 ? node : "");
}
function create(node, isSvg) {
    // console.assert(node !== null && node !== undefined);
    if (node instanceof HTMLElement || node instanceof SVGElement) return node;
    if (typeof node === "string") return createText(node);
    if (!node.tag || typeof node.tag === "function") return createText(JSON.stringify(node));
    isSvg = isSvg || node.tag === "svg";
    const element = isSvg ? document.createElementNS("http://www.w3.org/2000/svg", node.tag) : document.createElement(node.tag);
    updateProps(element, node.props, isSvg);
    if (node.children) node.children.forEach((child)=>element.appendChild(create(child, isSvg)));
    return element;
}
function mergeProps(oldProps, newProps) {
    newProps["class"] = newProps["class"] || newProps["className"];
    delete newProps["className"];
    const props = {};
    if (oldProps) Object.keys(oldProps).forEach((p)=>props[p] = null);
    if (newProps) Object.keys(newProps).forEach((p)=>props[p] = newProps[p]);
    return props;
}
function updateProps(element, props, isSvg) {
    // console.assert(!!element);
    const cached = element[ATTR_PROPS] || {};
    props = mergeProps(cached, props || {});
    element[ATTR_PROPS] = props;
    for(const name in props){
        const value = props[name];
        // if (cached[name] === value) continue;
        // console.log('updateProps', name, value);
        if (name.startsWith("data-")) {
            const dname = name.substring(5);
            const cname = dname.replace(/-(\w)/g, (match)=>match[1].toUpperCase());
            if (element.dataset[cname] !== value) {
                if (value || value === "") element.dataset[cname] = value;
                else delete element.dataset[cname];
            }
        } else if (name === "style") {
            if (element.style.cssText) element.style.cssText = "";
            if (typeof value === "string") element.style.cssText = value;
            else {
                for(const s in value)if (element.style[s] !== value[s]) element.style[s] = value[s];
            }
        } else if (name.startsWith("xlink")) {
            const xname = name.replace("xlink", "").toLowerCase();
            if (value == null || value === false) element.removeAttributeNS("http://www.w3.org/1999/xlink", xname);
            else element.setAttributeNS("http://www.w3.org/1999/xlink", xname, value);
        } else if (name.startsWith("on")) {
            if (!value || typeof value === "function") element[name] = value;
            else if (typeof value === "string") {
                if (value) element.setAttribute(name, value);
                else element.removeAttribute(name);
            }
        } else if (/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-|^for$/g.test(name) || isSvg) {
            if (element.getAttribute(name) !== value) {
                if (value) element.setAttribute(name, value);
                else element.removeAttribute(name);
            }
        } else if (element[name] !== value) element[name] = value;
        if (name === "key" && value) keyCache[value] = element;
    }
    if (props && typeof props["ref"] === "function") window.requestAnimationFrame(()=>props["ref"](element));
}
function render_component(node, parent, idx) {
    const { tag, props, children } = node;
    let key = `_${idx}`;
    let id = props && props["id"];
    if (!id) id = `_${idx}${Date.now()}`;
    else key = id;
    let asTag = "section";
    if (props && props["as"]) {
        asTag = props["as"];
        delete props["as"];
    }
    if (!parent.__componentCache) parent.__componentCache = {};
    let component = parent.__componentCache[key];
    if (!component || !(component instanceof tag) || !component.element) {
        const element = document.createElement(asTag);
        component = parent.__componentCache[key] = new tag(Object.assign(Object.assign({}, props), {
            children
        })).mount(element, {
            render: true
        });
    } else component.renderState(component.state);
    if (component.mounted) {
        const new_state = component.mounted(props, children, component.state);
        typeof new_state !== "undefined" && component.setState(new_state);
    }
    updateProps(component.element, props, false);
    return component.element;
}
function createComponent(node, parent, idx = 0) {
    var _a;
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map((child)=>createComponent(child, parent, idx++));
    let vdom = node;
    if (node && typeof node.tag === "function" && Object.getPrototypeOf(node.tag).__isAppRunComponent) vdom = render_component(node, parent, idx);
    if (vdom && Array.isArray(vdom.children)) {
        const new_parent = (_a = vdom.props) === null || _a === void 0 ? void 0 : _a._component;
        if (new_parent) {
            let i = 0;
            vdom.children = vdom.children.map((child)=>createComponent(child, new_parent, i++));
        } else vdom.children = vdom.children.map((child)=>createComponent(child, parent, idx++));
    }
    return vdom;
}

},{"./directive":"dqBdl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqBdl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./app");
var _appDefault = parcelHelpers.interopDefault(_app);
const getStateValue = (component, name)=>{
    return (name ? component["state"][name] : component["state"]) || "";
};
const setStateValue = (component, name, value)=>{
    if (name) {
        const state = component["state"] || {};
        state[name] = value;
        component.setState(state);
    } else component.setState(value);
};
const apply_directive = (key, props, tag, component)=>{
    if (key.startsWith("$on")) {
        const event = props[key];
        key = key.substring(1);
        if (typeof event === "boolean") props[key] = (e)=>component.run ? component.run(key, e) : (0, _appDefault.default).run(key, e);
        else if (typeof event === "string") props[key] = (e)=>component.run ? component.run(event, e) : (0, _appDefault.default).run(event, e);
        else if (typeof event === "function") props[key] = (e)=>component.setState(event(component.state, e));
        else if (Array.isArray(event)) {
            const [handler, ...p] = event;
            if (typeof handler === "string") props[key] = (e)=>component.run ? component.run(handler, ...p, e) : (0, _appDefault.default).run(handler, ...p, e);
            else if (typeof handler === "function") props[key] = (e)=>component.setState(handler(component.state, ...p, e));
        }
    } else if (key === "$bind") {
        const type = props["type"] || "text";
        const name = typeof props[key] === "string" ? props[key] : props["name"];
        if (tag === "input") switch(type){
            case "checkbox":
                props["checked"] = getStateValue(component, name);
                props["onclick"] = (e)=>setStateValue(component, name || e.target.name, e.target.checked);
                break;
            case "radio":
                props["checked"] = getStateValue(component, name) === props["value"];
                props["onclick"] = (e)=>setStateValue(component, name || e.target.name, e.target.value);
                break;
            case "number":
            case "range":
                props["value"] = getStateValue(component, name);
                props["oninput"] = (e)=>setStateValue(component, name || e.target.name, Number(e.target.value));
                break;
            default:
                props["value"] = getStateValue(component, name);
                props["oninput"] = (e)=>setStateValue(component, name || e.target.name, e.target.value);
        }
        else if (tag === "select") {
            props["value"] = getStateValue(component, name);
            props["onchange"] = (e)=>{
                if (!e.target.multiple) setStateValue(component, name || e.target.name, e.target.value);
            };
        } else if (tag === "option") {
            props["selected"] = getStateValue(component, name);
            props["onclick"] = (e)=>setStateValue(component, name || e.target.name, e.target.selected);
        } else if (tag === "textarea") {
            props["innerHTML"] = getStateValue(component, name);
            props["oninput"] = (e)=>setStateValue(component, name || e.target.name, e.target.value);
        }
    } else (0, _appDefault.default).run("$", {
        key,
        tag,
        props,
        component
    });
};
const directive = (vdom, component)=>{
    if (Array.isArray(vdom)) return vdom.map((element)=>directive(element, component));
    else {
        let { type, tag, props, children } = vdom;
        tag = tag || type;
        children = children || (props === null || props === void 0 ? void 0 : props.children);
        if (props) Object.keys(props).forEach((key)=>{
            if (key.startsWith("$")) {
                apply_directive(key, props, tag, component);
                delete props[key];
            }
        });
        if (children) directive(children, component);
        return vdom;
    }
};
exports.default = directive;

},{"./app":"kGCC3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSDus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component);
var _app = require("./app");
var _appDefault = parcelHelpers.interopDefault(_app);
var _decorator = require("./decorator");
var _directive = require("./directive");
var _directiveDefault = parcelHelpers.interopDefault(_directive);
const componentCache = new Map();
if (!(0, _appDefault.default).find("get-components")) (0, _appDefault.default).on("get-components", (o)=>o.components = componentCache);
const REFRESH = (state)=>state;
class Component {
    renderState(state, vdom = null) {
        if (!this.view) return;
        let html = vdom || this.view(state);
        (0, _appDefault.default)["debug"] && (0, _appDefault.default).run("debug", {
            component: this,
            _: html ? "." : "-",
            state,
            vdom: html,
            el: this.element
        });
        if (typeof document !== "object") return;
        const el = typeof this.element === "string" && this.element ? document.getElementById(this.element) || document.querySelector(this.element) : this.element;
        if (!el) return;
        const tracking_attr = "_c";
        if (!this.unload) el.removeAttribute && el.removeAttribute(tracking_attr);
        else if (el["_component"] !== this || el.getAttribute(tracking_attr) !== this.tracking_id) {
            this.tracking_id = new Date().valueOf().toString();
            el.setAttribute(tracking_attr, this.tracking_id);
            if (typeof MutationObserver !== "undefined") {
                if (!this.observer) this.observer = new MutationObserver((changes)=>{
                    if (changes[0].oldValue === this.tracking_id || !document.body.contains(el)) {
                        this.unload(this.state);
                        this.observer.disconnect();
                        this.observer = null;
                    }
                });
                this.observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeOldValue: true,
                    attributeFilter: [
                        tracking_attr
                    ]
                });
            }
        }
        el["_component"] = this;
        if (!vdom && html) {
            html = (0, _directiveDefault.default)(html, this);
            if (this.options.transition && document && document["startViewTransition"]) document["startViewTransition"](()=>(0, _appDefault.default).render(el, html, this));
            else (0, _appDefault.default).render(el, html, this);
        }
        this.rendered && this.rendered(this.state);
    }
    setState(state, options = {
        render: true,
        history: false
    }) {
        if (state instanceof Promise) // Promise will not be saved or rendered
        // state will be saved and rendered when promise is resolved
        Promise.resolve(state).then((v)=>{
            this.setState(v, options);
            this._state = state;
        });
        else {
            this._state = state;
            if (state == null) return;
            this.state = state;
            if (options.render !== false) {
                // before render state
                if (options.transition && document && document["startViewTransition"]) document["startViewTransition"](()=>this.renderState(state));
                else this.renderState(state);
            }
            if (options.history !== false && this.enable_history) {
                this._history = [
                    ...this._history,
                    state
                ];
                this._history_idx = this._history.length - 1;
            }
            if (typeof options.callback === "function") options.callback(this.state);
        }
    }
    constructor(state, view, update, options){
        this.state = state;
        this.view = view;
        this.update = update;
        this.options = options;
        this._app = new (0, _app.App)();
        this._actions = [];
        this._global_events = [];
        this._history = [];
        this._history_idx = -1;
        this._history_prev = ()=>{
            this._history_idx--;
            if (this._history_idx >= 0) this.setState(this._history[this._history_idx], {
                render: true,
                history: false
            });
            else this._history_idx = 0;
        };
        this._history_next = ()=>{
            this._history_idx++;
            if (this._history_idx < this._history.length) this.setState(this._history[this._history_idx], {
                render: true,
                history: false
            });
            else this._history_idx = this._history.length - 1;
        };
        this.start = (element = null, options)=>{
            this.mount(element, Object.assign({
                render: true
            }, options));
            if (this.mounted && typeof this.mounted === "function") {
                const new_state = this.mounted({}, [], this.state);
                typeof new_state !== "undefined" && this.setState(new_state);
            }
            return this;
        };
    }
    mount(element = null, options) {
        var _a, _b;
        console.assert(!this.element, "Component already mounted.");
        this.options = options = Object.assign(Object.assign({}, this.options), options);
        this.element = element;
        this.global_event = options.global_event;
        this.enable_history = !!options.history;
        if (this.enable_history) {
            this.on(options.history.prev || "history-prev", this._history_prev);
            this.on(options.history.next || "history-next", this._history_next);
        }
        if (options.route) {
            this.update = this.update || {};
            if (!this.update[options.route]) this.update[options.route] = REFRESH;
        }
        this.add_actions();
        this.state = (_b = (_a = this.state) !== null && _a !== void 0 ? _a : this["model"]) !== null && _b !== void 0 ? _b : {};
        if (typeof this.state === "function") this.state = this.state();
        this.setState(this.state, {
            render: !!options.render,
            history: true
        });
        if ((0, _appDefault.default)["debug"]) {
            if (componentCache.get(element)) componentCache.get(element).push(this);
            else componentCache.set(element, [
                this
            ]);
        }
        return this;
    }
    is_global_event(name) {
        return name && (this.global_event || this._global_events.indexOf(name) >= 0 || name.startsWith("#") || name.startsWith("/") || name.startsWith("@"));
    }
    add_action(name, action, options = {}) {
        if (!action || typeof action !== "function") return;
        if (options.global) this._global_events.push(name);
        this.on(name, (...p)=>{
            (0, _appDefault.default)["debug"] && (0, _appDefault.default).run("debug", {
                component: this,
                _: ">",
                event: name,
                p,
                current_state: this.state,
                options
            });
            const newState = action(this.state, ...p);
            (0, _appDefault.default)["debug"] && (0, _appDefault.default).run("debug", {
                component: this,
                _: "<",
                event: name,
                p,
                newState,
                state: this.state,
                options
            });
            this.setState(newState, options);
        }, options);
    }
    add_actions() {
        const actions = this.update || {};
        (0, _decorator.Reflect).getMetadataKeys(this).forEach((key)=>{
            if (key.startsWith("apprun-update:")) {
                const meta = (0, _decorator.Reflect).getMetadata(key, this);
                actions[meta.name] = [
                    this[meta.key].bind(this),
                    meta.options
                ];
            }
        });
        const all = {};
        if (Array.isArray(actions)) actions.forEach((act)=>{
            const [name, action, opts] = act;
            const names = name.toString();
            names.split(",").forEach((n)=>all[n.trim()] = [
                    action,
                    opts
                ]);
        });
        else Object.keys(actions).forEach((name)=>{
            const action = actions[name];
            if (typeof action === "function" || Array.isArray(action)) name.split(",").forEach((n)=>all[n.trim()] = action);
        });
        if (!all["."]) all["."] = REFRESH;
        Object.keys(all).forEach((name)=>{
            const action = all[name];
            if (typeof action === "function") this.add_action(name, action);
            else if (Array.isArray(action)) this.add_action(name, action[0], action[1]);
        });
    }
    run(event, ...args) {
        if (this.state instanceof Promise) return Promise.resolve(this.state).then((state)=>{
            this.state = state;
            this.run(event, ...args);
        });
        else {
            const name = event.toString();
            return this.is_global_event(name) ? (0, _appDefault.default).run(name, ...args) : this._app.run(name, ...args);
        }
    }
    on(event, fn, options) {
        const name = event.toString();
        this._actions.push({
            name,
            fn
        });
        return this.is_global_event(name) ? (0, _appDefault.default).on(name, fn, options) : this._app.on(name, fn, options);
    }
    runAsync(event, ...args) {
        const name = event.toString();
        return this.is_global_event(name) ? (0, _appDefault.default).runAsync(name, ...args) : this._app.runAsync(name, ...args);
    }
    // obsolete
    query(event, ...args) {
        return this.runAsync(event, ...args);
    }
    unmount() {
        var _a;
        (_a = this.observer) === null || _a === void 0 || _a.disconnect();
        this._actions.forEach((action)=>{
            const { name, fn } = action;
            this.is_global_event(name) ? (0, _appDefault.default).off(name, fn) : this._app.off(name, fn);
        });
    }
}
Component.__isAppRunComponent = true;

},{"./app":"kGCC3","./decorator":"6qxky","./directive":"dqBdl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6qxky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Reflect", ()=>Reflect);
parcelHelpers.export(exports, "update", ()=>update);
parcelHelpers.export(exports, "on", ()=>on);
parcelHelpers.export(exports, "customElement", ()=>customElement);
var _webComponent = require("./web-component");
var _webComponentDefault = parcelHelpers.interopDefault(_webComponent);
const Reflect = {
    meta: new WeakMap(),
    defineMetadata (metadataKey, metadataValue, target) {
        if (!this.meta.has(target)) this.meta.set(target, {});
        this.meta.get(target)[metadataKey] = metadataValue;
    },
    getMetadataKeys (target) {
        target = Object.getPrototypeOf(target);
        return this.meta.get(target) ? Object.keys(this.meta.get(target)) : [];
    },
    getMetadata (metadataKey, target) {
        target = Object.getPrototypeOf(target);
        return this.meta.get(target) ? this.meta.get(target)[metadataKey] : null;
    }
};
function update(events, options = {}) {
    return (target, key, descriptor)=>{
        const name = events ? events.toString() : key;
        Reflect.defineMetadata(`apprun-update:${name}`, {
            name,
            key,
            options
        }, target);
        return descriptor;
    };
}
function on(events, options = {}) {
    return function(target, key) {
        const name = events ? events.toString() : key;
        Reflect.defineMetadata(`apprun-update:${name}`, {
            name,
            key,
            options
        }, target);
    };
}
function customElement(name, options) {
    return function _customElement(constructor) {
        (0, _webComponentDefault.default)(name, constructor, options);
        return constructor;
    };
}

},{"./web-component":"bTtTF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bTtTF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>customElement);
const customElement = (componentClass, options = {})=>class CustomElement extends HTMLElement {
        constructor(){
            super();
        }
        get component() {
            return this._component;
        }
        get state() {
            return this._component.state;
        }
        static get observedAttributes() {
            // attributes need to be set to lowercase in order to get observed
            return (options.observedAttributes || []).map((attr)=>attr.toLowerCase());
        }
        connectedCallback() {
            if (this.isConnected && !this._component) {
                const opts = options || {};
                this._shadowRoot = opts.shadow ? this.attachShadow({
                    mode: "open"
                }) : this;
                const observedAttributes = opts.observedAttributes || [];
                const attrMap = observedAttributes.reduce((map, name)=>{
                    const lc = name.toLowerCase();
                    if (lc !== name) map[lc] = name;
                    return map;
                }, {});
                this._attrMap = (name)=>attrMap[name] || name;
                const props = {};
                Array.from(this.attributes).forEach((item)=>props[this._attrMap(item.name)] = item.value);
                // add getters/ setters to allow observation on observedAttributes
                observedAttributes.forEach((name)=>{
                    if (this[name] !== undefined) props[name] = this[name];
                    Object.defineProperty(this, name, {
                        get () {
                            return props[name];
                        },
                        set (value) {
                            // trigger change event
                            this.attributeChangedCallback(name, props[name], value);
                        },
                        configurable: true,
                        enumerable: true
                    });
                });
                requestAnimationFrame(()=>{
                    const children = this.children ? Array.from(this.children) : [];
                    // children.forEach(el => el.parentElement.removeChild(el));
                    this._component = new componentClass(Object.assign(Object.assign({}, props), {
                        children
                    })).mount(this._shadowRoot, opts);
                    // attach props to component
                    this._component._props = props;
                    // expose dispatchEvent
                    this._component.dispatchEvent = this.dispatchEvent.bind(this);
                    if (this._component.mounted) {
                        const new_state = this._component.mounted(props, children, this._component.state);
                        if (typeof new_state !== "undefined") this._component.state = new_state;
                    }
                    this.on = this._component.on.bind(this._component);
                    this.run = this._component.run.bind(this._component);
                    if (!(opts.render === false)) this._component.run(".");
                });
            }
        }
        disconnectedCallback() {
            var _a, _b, _c, _d;
            (_b = (_a = this._component) === null || _a === void 0 ? void 0 : _a.unload) === null || _b === void 0 || _b.call(_a);
            (_d = (_c = this._component) === null || _c === void 0 ? void 0 : _c.unmount) === null || _d === void 0 || _d.call(_c);
            this._component = null;
        }
        attributeChangedCallback(name, oldValue, value) {
            if (this._component) {
                // camelCase attributes arrive only in lowercase
                const mappedName = this._attrMap(name);
                // store the new property/ attribute
                this._component._props[mappedName] = value;
                this._component.run("attributeChanged", mappedName, oldValue, value);
                if (value !== oldValue && !(options.render === false)) window.requestAnimationFrame(()=>{
                    // re-render state with new combined props on next animation frame
                    this._component.run(".");
                });
            }
        }
    };
exports.default = (name, componentClass, options)=>{
    typeof customElements !== "undefined" && customElements.define(name, customElement(componentClass, options));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"buVFD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ROUTER_EVENT", ()=>ROUTER_EVENT);
parcelHelpers.export(exports, "ROUTER_404_EVENT", ()=>ROUTER_404_EVENT);
parcelHelpers.export(exports, "route", ()=>route);
var _app = require("./app");
var _appDefault = parcelHelpers.interopDefault(_app);
const ROUTER_EVENT = "//";
const ROUTER_404_EVENT = "///";
const route = (url)=>{
    if (!url) url = "#";
    if (url.startsWith("#")) {
        const [name, ...rest] = url.split("/");
        (0, _appDefault.default).run(name, ...rest) || (0, _appDefault.default).run(ROUTER_404_EVENT, name, ...rest);
        (0, _appDefault.default).run(ROUTER_EVENT, name, ...rest);
    } else if (url.startsWith("/")) {
        const [_, name, ...rest] = url.split("/");
        (0, _appDefault.default).run("/" + name, ...rest) || (0, _appDefault.default).run(ROUTER_404_EVENT, "/" + name, ...rest);
        (0, _appDefault.default).run(ROUTER_EVENT, "/" + name, ...rest);
    } else {
        (0, _appDefault.default).run(url) || (0, _appDefault.default).run(ROUTER_404_EVENT, url);
        (0, _appDefault.default).run(ROUTER_EVENT, url);
    }
};
exports.default = route;

},{"./app":"kGCC3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gjUm6","d8Dch"], "d8Dch", "parcelRequire59bc")

//# sourceMappingURL=index.b4b6dfad.js.map
