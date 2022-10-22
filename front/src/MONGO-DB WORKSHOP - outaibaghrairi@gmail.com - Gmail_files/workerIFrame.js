/**
 * This file is used to embed a worker in an iFrame into Gmail
 *
 * This is for working around the Chrome/WebKit restrictiom:
 * Commit d8cc69507968d87cea7eeefc39c0dae78f960879 in Chrome changes the handling of the
 * Content-Security-Policy header so that the worker-src directive if not present now defaults
 * to the value of the script-src directive instead of defaulting to the child-src directive.
 * Gmail delivers a CSP header specifying a script-src directive but no child-src directive.
 * This means that our web worker being loaded from a blob: URI is no longer permitted in Chrome 59 and above
 */
'use strict';

var workerPromise;
window.addEventListener('message', function(event){
  if (!/^(chrome|safari)-extension:/.test(event.origin)) return;

  if (event.data.eventName === 'setupWorker') {
		setupWorker(event.data.src);
		return;
	}

  if (workerPromise) {
    workerPromise.then(function(worker){
      worker.postMessage(event.data, event.data.transferableList);
    });
  }
});

const srcWhitelist = [
  /^https:\/\/([^\/:]+(\.|-dot-))?mailfoogae\.appspot\.com(:|$)/,
  /^https:\/\/([^\/:]+\.)?streak\.com(:|$)/
];

function setupWorker(src) {
  const srcUrl = new URL(src);
  if (!srcWhitelist.some(re => re.test(srcUrl.origin))) {
    throw new Error(`Invalid domain for worker script: ${src}`);
  }

  workerPromise = fetch(src)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(function(responseBlob) {
      const blob = new Blob([responseBlob, `\n//# sourceURL=${src}\n`], {
        type: 'text/javascript'
      });
      const worker = new Worker(URL.createObjectURL(blob));

      return new Promise(function(resolve) {
        worker.addEventListener('message', function(e) {
          if (event.data === 'ready') {
            resolve(worker);
          }

          if (window.parent) {
            window.parent.postMessage(event.data, '*', event.data.transferableList);
          }
        });
      });
    });
}


window.addEventListener('load', function(event) {
	if (window.parent) window.parent.postMessage('loaded', '*');
});
