"use strict";

function download(did) {
  window.open("/game/" + did);
}

function uplode(done) {
  window.open("/file/" + done)
}

function pay(give) {
  window.open("//" + give);
}