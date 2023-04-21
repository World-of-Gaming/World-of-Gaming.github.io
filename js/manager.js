"use strict";

function download(did) {
  window.open("/game/" + did);
}

function upload(file) {
  window.open("/file/" + file)
}

function pay(give) {
  window.open("/checkout/" + give);
}
