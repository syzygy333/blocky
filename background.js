$(document).ready(function() {
  var screenWidth = $(window).width();
  var screenHeight = $(window).height();
  var blockSize = 32;
  var xAxisBlocks = screenWidth / blockSize;
  var yAxisBlocks = screenHeight / blockSize;
  for(i = 1; i < xAxisBlocks; i++) {
    $('<div class="block"></div>').appendTo(document.body);
  };
  for(i = 2; i < yAxisBlocks; i++) {
    for(u = 1; u < xAxisBlocks; u++) {
      $('<div class="block"></div>').appendTo(document.body);
    };
  };
});
