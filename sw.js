/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-c5fd805d'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "registerSW.js",
    "revision": "402b66900e731ca748771b6fc5e7a068"
  }, {
    "url": "favicon.svg",
    "revision": "1449528bffd2c49fa15d98d88ed6180d"
  }, {
    "url": "favicon.png",
    "revision": "8e8947133b7747ea17726f48139c54c4"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "ae46efde7582293b1b7df7e2d04371d4"
  }, {
    "url": "icons/icon-96.png",
    "revision": "6a6c2fd19d25f9cdadd030f0359851c8"
  }, {
    "url": "icons/icon-72.png",
    "revision": "e304fab422588400e95f8a198af55e43"
  }, {
    "url": "icons/icon-512.png",
    "revision": "a23e6e7c50ba5465ae3c884303d2f143"
  }, {
    "url": "icons/icon-384.png",
    "revision": "27cbacf457f882e96de75dcf43b67bac"
  }, {
    "url": "icons/icon-192.png",
    "revision": "246a46a13b28cb3f52052e67c81fffbf"
  }, {
    "url": "icons/icon-152.png",
    "revision": "fa8b85e7c15744d6d6b8bd3f637e16ff"
  }, {
    "url": "icons/icon-144.png",
    "revision": "6be77d25d96d894c71dd85ed4ae1876d"
  }, {
    "url": "icons/icon-128.png",
    "revision": "f94927a769e330a30b4107a2e20b5fab"
  }, {
    "url": "_app/immutable/nodes/8.CIfvGI3v.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/7.Kzf26WII.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/6.BpGlchWT.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/5.BISlJhNK.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/4.D-0YYiBk.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/3.CunfVecm.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/2.HmSZsCdx.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/15.Cy9rPFEO.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/14.D3TafIHR.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/13.Cf0u288z.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/12.XvA8fK9A.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/11.CEBzDh0i.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/1.DIR_dmRD.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/0.B_bqDTpC.js",
    "revision": null
  }, {
    "url": "_app/immutable/entry/start.DaBt4Gim.js",
    "revision": null
  }, {
    "url": "_app/immutable/entry/app.DzaOBzTC.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/fswzjU8Q.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/f6hTzmmr.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Y_UO_ris.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/YQy20KRr.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/UELYFGZ9.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/SDE1ixC8.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/RGl0hAXC.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/NVUUZsPh.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/MQDuMnbW.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/IWpUnTW0.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Dysl_WB5.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DxxLn5Kr.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DxQsB7_Z.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DxETe-WW.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DrTkPzRx.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DqBR4OPk.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DoH5Fsg8.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DoAU57yp.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Dmrnq4Fq.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DkOvDdnB.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DdGxjQOp.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DcDjexFV.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DSJK3vcO.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DP8oflvS.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DNcO3vZA.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DLO43CRH.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/DHO1Xpn8.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/D7c7TiA1.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/D-jFXs--.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Cp_O_0vT.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/CoG4GrKq.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/ClmmRt-a.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/CgDHUp-f.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/CgB_LQ6M.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/CauqUK9o.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/C_P4RQGD.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/CZ_fDaHP.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/CWzcq6YQ.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/CTbKuMg7.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/CSZ1MkUF.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/CO5xRms0.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/CBCrrJ93.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BrWn3BCU.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BqIsR8xN.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Bq89gFlZ.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BkEq-Fe8.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BihHmt__.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Bf_dv9pR.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BdJbvNw3.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Bd6N2zhq.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Bc5FwUaB.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BTqKvSon.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BSABO_iB.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BRLrvHDU.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BMU3q0Wm.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BGuwPqVH.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BEPA8FQM.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/B7JYc5Zw.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/B70ZPJXY.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/B5tdGlt5.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/B4rTMP9X.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/B4k4ErN2.js",
    "revision": null
  }, {
    "url": "_app/immutable/assets/index.imULxUqb.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/index.CV-KWLNP.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/StatusIndicator.CEY3uSgq.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/7.DnJGRw9F.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/6.C6nY90DW.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/3.DXPRfVNg.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/15.CT5HTNu_.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/12.BsmjJPfb.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/11.A1OeHD4m.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/0.D8HM0dCQ.css",
    "revision": null
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/")));
  workbox.registerRoute(/^\/api\//, new workbox.NetworkFirst({
    "cacheName": "api-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 300
    })]
  }), 'GET');

}));
