"use strict";

function download(did) {
  var file, extension;
  file = "game";
  extension = ".html";
  
  window.open(file + did + extension);
}
