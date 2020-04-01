$(window).on("load resize", function() {
  var sidebarWidth = $("#side").innerWidth();
  $(".page-spacer").css("width", sidebarWidth);
});
