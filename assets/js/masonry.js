$(document).ready(function () {
  // Init Masonry
  var $grid = $(".grid").masonry({
    columnWidth: ".grid-sizer",
    gutter: 10,
    horizontalOrder: true,
    itemSelector: ".grid-item",
    percentPosition: true,
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
  });
});
