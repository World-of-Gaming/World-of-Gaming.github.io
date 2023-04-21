"use strict";

function download(did) {
  window.open("/game/" + did);
}

function upload(done) {
  window.open("/file/" + done)
}

function pay(give) {
  window.open("/checkout/" + give);
}
